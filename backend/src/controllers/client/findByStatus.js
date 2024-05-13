const logger = require("../../custom/logger");
const findByStatus = require("../../models/findByStatus");

module.exports = {
  async handle(req, res) {
    try {
      const { status } = req.params;
      const clients = await findByStatus
      .execute(status);

      logger.info("successfully found client");
      res.status(200).json(clients);

    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByStatus.js";
      }
      throw error;
    }
  },
};