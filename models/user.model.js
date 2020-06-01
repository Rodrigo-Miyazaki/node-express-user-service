const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    gender:{
        type: String
    },
    cpf:{
        type: String
    }
})

module.exports = mongoose.model("User", userSchema);