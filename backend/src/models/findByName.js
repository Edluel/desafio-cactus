const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(name) {
    try {
      let clients = await prisma.clientes.findMany({
        where: {
          nomeCliente: {
            contains: name.toUpperCase(),
          },
        },
      });

      clients = JSON.stringify(clients, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );

      return clients;
        
    } catch (error) {
      error.path = "src/models/findByName.js";
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  },
};

