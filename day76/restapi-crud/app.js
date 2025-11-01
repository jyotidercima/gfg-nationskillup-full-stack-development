const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let items = [

    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }

];

app.get('/', (req, res) => {
    res.send('Welcome to REST API!');
});

app.post("/items", (req, res) => {
    const { name } = req.body;
    const newItem = { id: items.length + 1, name };
    items.push(newItem);
    res.status(201).json(newItem);
})

app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send(`Item not found`);
    res.json(item);
});

app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send("Item not found");

    item.name = req.body.name;
    res.json(item);
});

app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send("Item not found");

    const deleteItem = items.splice(itemIndex, 1);
    res.json(deleteItem);
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});