const { Router } = require("express");
const routes = Router();

const Cadastro = require("./controller/Cadastro");

routes.post("/registrar", Cadastro.post);
routes.get("/listartodos", Cadastro.listarTodos);
routes.delete("/deletartodos", Cadastro.deletarTodos);

// routes.get("/", (req, res) => {
//     return res.json({
//         message: "teste",
//     });
// });

module.exports = routes;
