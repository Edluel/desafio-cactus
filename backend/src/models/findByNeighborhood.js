const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(neighborhood) {
    try {
      let clients = await prisma.clientes.findMany({
        where: {
          bairroCliente: {
            contains: neighborhood.toUpperCase(),
          },
        },
      });

      clients = JSON.stringify(clients, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );

      return clients;

    } catch (error) {
      error.path = "src/models/findByNeighborhood.js";
      throw error;

    } finally {
      await prisma.$disconnect();
    }
  },
};