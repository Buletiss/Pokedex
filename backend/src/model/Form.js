const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    nome: String,
    email: String,
});

module.exports = mongoose.model("Form", FormSchema);
