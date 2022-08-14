const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    sexo: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model("Form", FormSchema);
