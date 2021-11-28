const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    mail: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    imei: {
        type: String,
        required: false
    },
    config: {
        mensaje: {
            type: String,
            require: false
        },
        contactemer: {
            type: String,
            require:false
        },
        date: {
            type: String,
            require:false
        }
    }
});

module.exports = mongoose.model("usuario", userSchema);