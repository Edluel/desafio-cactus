const { Router } = require("express");

const findManyClientesController = require("./controllers/client/findManyClientes");
const findByIdController = require("./controllers/client/findeById");

const routes = Router();

//rota para buscar todos os clientes
routes.get("/findManyCliente", findManyClientesController.handle);
//rota para buscar clientes por id
routes.get("/findById/:id", findByIdController.handle);


module.exports = routes;
