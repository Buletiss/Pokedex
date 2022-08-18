const Form = require("../model/Form");

module.exports = {
    async login(req, res) {
        try {
            const { email, password } = req.body;

            const login = await Form.findOne({ email, password });

            if (login) {
                return res.send("message: logado");
            }
            return res.send("message: email ou senha incorreta");
        } catch (error) {
            return res.send("message: não logou");
        }
    },
};
