const { Router } = require("express");

const findManyClientesController = require("./controllers/client/findManyClientes");
const findByIdController = require("./controllers/client/findById");
const findByNameController = require("./controllers/client/findByName");
const findByStatusController = require("./controllers/client/findByStatus");
const findByInternetStatusController = require("./controllers/client/findByInternetStatus");

const routes = Router();

//rota para buscar todos os clientes
routes.get("/findManyCliente", findManyClientesController.handle);
//rota para buscar clientes por id
routes.get("/findById/:id", findByIdController.handle);
//rota para buscar clientes por nome
routes.get("/findByName/:name", findByNameController.handle);
//rota para buscar clientes por status
routes.get("/findByStatus/:status", findByStatusController.handle);
//rota para buscar clientes pelo status do contrato de internet
routes.get("/findByInternet/:internetStatus", findByInternetStatusController.handle);

module.exports = routes;
