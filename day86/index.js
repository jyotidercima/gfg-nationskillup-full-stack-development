const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL || 'monogodb://127.0.0.1:27017/';

async function connect() {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MongoDB connected');
}
connect().catch(err => {
    console.log('MongoDB connection error: ', err);
    process.exit(1);
});
app.post('/setup', async (req, res) => {
    await User.deleteMany({});
    await User.create({ name: 'Alice', balance: 100 });
    await User.create({ name: 'Bob', balance: 50 });
    res.json({ ok: true, msg: 'Created Alice (100) and Bob (50)' });
});

app.get('/balance', async (req, res) => {
    const users = await User.find().select('name balance -_id').lean();
    res.json(users);
});

/**
 * Transfer endpoint:
 * body: { from: "Alice", to: "Bob", amount: 30, failAfterDebit: true|false }
 * If failAfterDebit=true, we simulate an error after debit to force rollback.
 */
app.post('/transfer', async (req, res) => {
    const { from, to, amount, failAfterDebit } = req.body;
    if (!from || !to || !amount) return res.status(400).json({ error: 'from, to, amount required' });

    // Start a session
    const session = await mongoose.startSession();

    try {
        // Option A: automatic commit/rollback using withTransaction
        const result = await session.withTransaction(async () => {
            // Ensure using the session for all operations
            const sender = await User.findOne({ name: from }).session(session);
            const receiver = await User.findOne({ name: to }).session(session);

            if (!sender || !receiver) {
                throw new Error('Sender or receiver not found');
            }
            if (sender.balance < amount) {
                throw new Error('Insufficient funds');
            }

            // Debit sender
            sender.balance -= amount;
            await sender.save({ session });

            // Optionally simulate a failure to test rollback
            if (failAfterDebit) {
                throw new Error('Simulated crash after debit');
            }

            // Credit receiver
            receiver.balance += amount;
            await receiver.save({ session });

            // returning a value here does not commit/abort; commit happens after withTransaction ends successfully
            return { ok: true };
        }, {
            // optional transaction options
            readPreference: 'primary',
            readConcern: { level: 'local' },
            writeConcern: { w: 'majority' }
        });

        // if we reach here, transaction committed
        res.json({ success: true, info: result });
    } catch (err) {
        // withTransaction aborts automatically when an error is thrown.
        res.status(500).json({ success: false, error: err.message });
    } finally {
        session.endSession();
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server listening on', PORT);
});