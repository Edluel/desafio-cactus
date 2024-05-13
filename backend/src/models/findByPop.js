const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(pop) {
    try {
      let clientes = await prisma.clientes.findMany({
        where: {
          popCliente: {
            contains: pop.toUpperCase(),
          },
        },
      });
      
      clientes = JSON.stringify(clientes, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );

      return clientes;
      
    } catch (error) {
      error.path = "src/models/findByPop.js";
      throw error;

    } finally {
      await prisma.$disconnect();
    }
  },
};