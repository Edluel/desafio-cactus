const logger = require('../../custom/logger');
const findByCity = require('../../models/findByCity');

module.exports = {
  async handle(req, res) {
    try {
      const { city } = req.params;
      const clients = await findByCity.execute(city);

      logger.info("successfully found city");
      res.status(200).json(clients);
      
    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByCity.js";
      }
      throw error;
    }
  },
};