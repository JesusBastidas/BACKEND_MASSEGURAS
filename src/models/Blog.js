const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    idautor: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    category:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model("blog", blogSchema);