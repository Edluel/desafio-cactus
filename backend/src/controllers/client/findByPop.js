const logger = require('../../custom/logger');
const findByPop = require('../../models/findByPop');

module.exports = {
  async handle(req, res) {
    try {
      const { pop } = req.params;
      const clients = await findByPop.execute(pop);

      logger.info("successfully found pop");
      res.status(200).json(clients);
      
    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByPop.js";
      }
      throw error;
    }
  },
};