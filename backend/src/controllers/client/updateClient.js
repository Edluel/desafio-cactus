const logger = require('../../custom/logger');
const updateClient = require('../../models/updateClient');

module.exports = {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const { ...data } = req.body;

      const result = await updateClient.execute(id, data);
      
      if (result === "client not found") {
        logger.error("client not found");
         res.status(404).json({ error: "client not found" });
      }

      logger.info("successfully updated client");
       res.status(200).json({ message: "client successfully updated" });

    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/updateClient.js";
      }
      throw error;
    } 
  },
};