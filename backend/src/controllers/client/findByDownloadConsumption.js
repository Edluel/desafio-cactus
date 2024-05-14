const logger =  require('../../custom/logger');
const findByDownloadConsumption = require('../../models/findByDownloadConsumption');

module.exports = {
  async handle(req, res) {
    try {
      const { choice, consumption } = req.params;
      
      const clients = await findByDownloadConsumption.execute(choice, consumption);

      logger.info("successfully found clients by download consumption");
      res.status(200).json(clients);
      
    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByDownloadConsumption.js";
      }
      throw error;
    }
  },
};