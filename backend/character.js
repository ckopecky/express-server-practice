const mongoose = require('mongoose');

const characterDefinition = {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    }


}

const characterSchema = new mongoose.Schema(characterDefinition);
module.exports = mongoose.model("character", characterSchema);
