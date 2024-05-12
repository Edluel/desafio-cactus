const logger = require("../../custom/logger");
const findById = require("../../models/findById");

module.exports = {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const clients = await findById
      .execute(id);
      
      // Verifica se o cliente foi encontrado
      if (clients === "null") {
        // Registra uma mensagem de erro no log
        logger.error("client not found");
        // Retorna uma resposta de erro
        return res.status(404).json({ error: "client not found" });
      }

      // Registra uma mensagem de sucesso no log
      logger.info("successfully found client");

      // Retorna os clientes como resposta
      res.status(200).json(clients);
    } catch (error) {
      // Tratamento de erros
      if (!error.path) {
        // Informa o caminho do erro se não estiver definido
        error.path = "src/controllers/client/findByIdClientesController.js";
      }
      throw error;
    }
  },
};
