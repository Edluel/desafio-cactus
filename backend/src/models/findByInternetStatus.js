const { PrismaClient } = require("@prisma/client");
const logger = require("../custom/logger");
const { execute } = require("./findManyClientes");

const prisma = new PrismaClient();

module.exports = {
  async execute(internetStatus) {
    try {
      let clients = await prisma.clientes.findMany({
        where: {
          statusInternet: parseInt(internetStatus),
        },
      });

      clients = JSON.stringify(clients, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );

      return clients;

    } catch (error) {
      error.path = "src/models/findByInternetStatus.js";
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  },
};