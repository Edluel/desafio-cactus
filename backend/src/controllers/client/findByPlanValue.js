const logger = require('../../custom/logger');
const findByPlanValue = require('../../models/findByPlanValue');

module.exports = {
  async handle(req, res) {
    try {
      const { choice, value } = req.params;

      const clients = await findByPlanValue.execute(choice, value);

      logger.info("successfully found clients by plan value");
      res.status(200).json(clients);

    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByPlanValue.js";
      }
      throw error;
    }
  },
};