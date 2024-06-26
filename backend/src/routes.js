const { Router } = require("express");
//get
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
const findByNeighborhoodController = require("./controllers/client/findByNeighborhood");
const findByContractPlanController = require("./controllers/client/findByContractPlan");
const findByConnectionStartController = require("./controllers/client/findByConnectionStart");
const findByConnectedTimeController = require("./controllers/client/findByConnectedTime");
const findByDownloadConsumptionController = require("./controllers/client/findByDownloadConsumption");
const findByUploadConsumptionController = require("./controllers/client/findByUploadConsumption");
const findByPlanValueController = require("./controllers/client/findByPlanValue");
//delete
const deleteClientController = require("./controllers/client/deleteClient");
//update
const updateClientController = require("./controllers/client/updateClient");
//create
const newClientController = require("./controllers/client/newClient");


const routes = Router();
  //get
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
//rota para buscar clientes por bairro
routes.get("/findByNeighborhood/:neighborhood", findByNeighborhoodController.handle);
//rota para buscar clientes por plano de contrato
routes.get("/findByContractPlan/:plan", findByContractPlanController.handle);
//rota para buscar clientes em determinado escopo de data e hora
routes.get("/findByConnectionStart/:startDate/:endDate", findByConnectionStartController.handle);
//rota para buscar clientes por tempo de conexao
routes.get("/findByConnectedTime/:choice/:duration", findByConnectedTimeController.handle);
//rotas para buscar clientes por consumo de download
routes.get("/findByDownloadConsumption/:choice/:consumption", findByDownloadConsumptionController.handle);
//rotas para buscar clientes por consumo de upload
routes.get("/findByUploadConsumption/:choice/:consumption", findByUploadConsumptionController.handle);
//rotas para buscar clientes por valor do plano
routes.get("/findByPlanValue/:choice/:value", findByPlanValueController.handle);
  
  //delete
//rota para deletar cliente baseado no id
routes.delete("/deleteClient/:id", deleteClientController.handle);
  //update
//rota para atualizar cliente baseado no id
routes.patch("/updateClient/:id", updateClientController.handle);
  //create
//rota para criar cliente
routes.post("/newClient/", newClientController.handle);

module.exports = routes;