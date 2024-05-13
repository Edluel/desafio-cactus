const logger = require("../../custom/logger");
const findByDisconnectReason = require("../../models/findByDisconnectReason");

module.exports = {
  async handle(req, res) {
    try {
      const { reason } = req.params;
      const clients = await findByDisconnectReason
      .execute(reason);

      logger.info("successfully found disconnect reason");
      res.status(200).json(clients);

    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByDisconnectReason.js";
      }
      throw error;
    }
  },
};