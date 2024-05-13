const { Router } = require("express");

const findManyClientesController = require("./controllers/client/findManyClientes");
const findByIdController = require("./controllers/client/findById");
const findByNameController = require("./controllers/client/findByName");
const findByStatusController = require("./controllers/client/findByStatus");
const findByInternetStatusController = require("./controllers/client/findByInternetStatus");
const findByIpController = require("./controllers/client/findByIp");
const findByConcentratorController = require("./controllers/client/findByConcentrator");
const findByDisconnectReasonController = require("./controllers/client/findByDisconnectReason");
const findByPopController = require("./controllers/client/findByPop");
const findByCityController = require("./controllers/client/findByCity");


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
//rota para buscar concentradores por ip
routes.get("/findByIp/:ip", findByIpController.handle);
//rota para buscar concentradores por nome
routes.get("/findByConcentrator/:concentrator", findByConcentratorController.handle);
//rota para buscar clientes por motivo de desconexao
routes.get("/findByDisconnectReason/:reason", findByDisconnectReasonController.handle);
//rota para buscar clientes por ponto de presenca
routes.get("/findByPop/:pop", findByPopController.handle);
//rota para buscar clientes por cidade
routes.get("/findByCity/:city", findByCityController.handle);

module.exports = routes;
