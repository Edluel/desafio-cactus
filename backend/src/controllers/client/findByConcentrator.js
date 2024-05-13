const logger = require("../../custom/logger");
const findByConcentrator = require("../../models/findByConcentrator");

module.exports = {
  async handle(req, res) {
    try {
      const {concentrator } = req.params;
      const clients = await findByConcentrator
      .execute(concentrator);

      logger.info("successfully found concentrator");
      res.status(200).json(clients);

    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByConcentrator.js";
      }
      throw error;
    }
  },
};