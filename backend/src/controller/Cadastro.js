const { findOne, base } = require("../model/Form");
const Form = require("../model/Form");

module.exports = {
    async post(req, res) {
        const { nome, email, sexo } = req.body;

        const busca = await Form.findOne({ email });
        try {
            if (!busca) {
                await Form.create({
                    nome,
                    email,
                    sexo,
                });
                return res.send("status: cadastrado com sucesso!!");
            } else return res.status(400).send("status: email já cadastrado");
        } catch (error) {
            return res.status(400);
        }
    },
    async listarTodos(req, res) {
        try {
            const busca = await Form.find({});
            return res.send({ busca });
        } catch {
            return res.status(400).send("error");
        }
    },
};
