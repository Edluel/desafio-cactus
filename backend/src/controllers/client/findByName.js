const logger = require("../../custom/logger");
const findByName = require("../../models/findByName");

module.exports = {
  async handle(req, res) {
    try {
      const { name } = req.params; 
      const clients = await findByName.execute(name);

      logger.info("successfully found clients");
      res.status(200).json(clients);
    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findByName.js";
      }
      throw error;
    }
  },
};
