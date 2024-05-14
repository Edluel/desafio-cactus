const logger = require('../../custom/logger');
const findByNeighborhood = require('../../models/findByNeighborhood');

module.exports = {
  async handle(req, res) {
    try {
      const { neighborhood } = req.params;
      const clients = await findByNeighborhood.execute(neighborhood);

      logger.info("successfully found neighborhood");
      res.status(200).json(clients);
      
    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByNeighborhood.js";
      }
      throw error;
    }
  },
};