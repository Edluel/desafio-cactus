const logger = require('../../custom/logger');
const findByDateTime = require('../../models/findByConnectionStart');

module.exports = {
  async handle(req, res) {
    try {
      const { startDate, endDate } = req.params;
      
      const clients = await findByDateTime.execute(startDate, endDate);

      logger.info("successfully found datetime range");
      res.status(200).json(clients);
      
    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByDateTime.js";
      }
      throw error;
    }
  },
};