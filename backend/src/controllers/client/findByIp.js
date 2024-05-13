const logger = require("../../custom/logger");
const findByIp = require("../../models/findByIp");

module.exports = {
  async handle(req, res) {
    try {
      const { ip } = req.params;
      const clients = await findByIp
      .execute(ip);

      logger.info("successfully found concentrator");
      res.status(200).json(clients);

    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByIp.js";
      }
      throw error;
    }
  },
};