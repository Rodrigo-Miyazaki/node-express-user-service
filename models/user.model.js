const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    cpf:{
        type: String
    },
    gender:{
        type: String
    },
    name:{
        required: true,
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);