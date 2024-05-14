const logger =  require('../../custom/logger');
const findByConnectedTime = require('../../models/findByConnectedTime');

module.exports = {
  async handle(req, res) {
    try {
      const { choice, duration } = req.params;
      
      const clients = await findByConnectedTime.execute(choice, duration);

      logger.info("successfully found clients by connected time");
      res.status(200).json(clients);
      
    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByConnectedTime.js";
      }
      throw error;
    }
  },
};