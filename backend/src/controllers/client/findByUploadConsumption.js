const logger = require('../../custom/logger');
const findByUploadConsumption = require('../../models/findByUploadConsumption');

module.exports = {
  async handle(req, res) {
    try {
      const { choice, consumption } = req.params;

      const clients = await findByUploadConsumption.execute(choice, consumption);

      logger.info("successfully found clients by upload consumption");
      res.status(200).json(clients);

    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByUploadConsumption.js";
      }
      throw error;
    }
  },
};