const mongoose = require("mongoose");

const foroSchema = mongoose.Schema({
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
    topic:{
        type:String,
        required:false
    },
    comments:{
        autor:{
            type:String,
            required:false
        },
        comment:{
            type: String,
            required: false
        },
        date:{
            type:String,
            required: false
        }
    }
});

module.exports = mongoose.model("foro", foroSchema);