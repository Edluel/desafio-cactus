const logger = require('../../custom/logger');
const deleteClient = require('../../models/deleteClient');

module.exports = {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const result = await deleteClient.execute(id);
      
      if (result === "client not found") {
        logger.error("client not found");
        return res.status(404).json({ error: "client not found" });
      }

      logger.info("successfully deleted client");
      return res.status(200).json({ message: "client successfully deleted" });

    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/deletClient.js";
      }
      throw error;
    }
  },
};
