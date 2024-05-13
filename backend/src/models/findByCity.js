const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(city) {
    try {
      let clients = await prisma.clientes.findMany({
        where: {
          cidadeCliente: {
            contains: city.toUpperCase(),
          },
        },
      });

      clients = JSON.stringify(clients, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );

      return clients;

    } catch (error) {
      error.path = "src/models/findByCity.js";
      throw error;

    } finally {
      await prisma.$disconnect();
    }
  },
};