const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gfgday85', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const userSchema = new mongoose.Schema({
    username: String,
    email: String
})

const postSchema = new mongoose.Schema({
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

//Creating models from userSchema and postSchema

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

//Query to find and show all the posts
Post.find()
    .then(p => console.log(p))
    .catch(err => console.log(err));

Post.find()
    .populate("postedBy")
    .then(posts => console.log(posts))
    .catch(error => console.log(error));