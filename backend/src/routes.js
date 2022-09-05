const { Router } = require('express');
const routes = Router();

const Cadastro = require('./controller/Cadastro');
const Login = require('./controller/Login');
const Menu = require('./controller/Menu');

routes.post('/registrar', Cadastro.post);
routes.get('/listartodos', Cadastro.listarTodos);
routes.delete('/deletartodos', Cadastro.deletarTodos);
routes.post('/login', Login.login);
routes.get('/pokemon', Menu.get);

// routes.get("/", (req, res) => {
//     return res.json({
//         message: "teste",
//     });
// });

module.exports = routes;
