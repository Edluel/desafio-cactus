const logger = require("../../custom/logger")
const newClient = require("../../models/newClient")


module.exports = {
  async handle(req, res) {
    try {
      const {...data} = req.body;
      const client = await newClient.execute(data);
      res.status(200).json(client);


      logger.info("successfully created client");
      res.status(200).json({ message: "client successfully created" });

    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/createClient.js";
      }
      throw error;
    }
  },
};
