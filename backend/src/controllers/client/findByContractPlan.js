const logger = require('../../custom/logger');
const findByContractPlan = require('../../models/findByContractPlan');

module.exports = {
  async handle(req, res) {
    try {
      const { plan } = req.params;
      const clients = await findByContractPlan.execute(plan);

      logger.info("successfully found contract plan");
      res.status(200).json(clients);
      
    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByContractPlan.js";
      }
      throw error;
    }
  },
};