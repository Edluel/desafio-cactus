const logger = require("../../custom/logger");
const findByInternetStatus = require("../../models/findByInternetStatus");

module.exports = {
  async handle(req, res) {
    try {
      const { internetStatus } = req.params;
      const clients = await findByInternetStatus
      .execute(internetStatus);

      const number = parseInt(internetStatus);
      if (!(number >= 0 && number <= 6)) {
        logger.error("status not found");
        return res.status(404).json({ error: "status variam de 0 a 6" });
      }

      logger.info("successfully found client");
      res.status(200).json(clients);

    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByInternetStatus.js";
      }
      throw error;
    }
  },
};