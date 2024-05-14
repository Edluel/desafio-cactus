const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(id) {
    try {
      const cliente = await prisma.clientes.findUnique({
        where: {
          id,
        },
      });

      if (!cliente) {
        throw new Error("client not found");
      }

      // deleta o cliente
      await prisma.clientes.delete({
        where: {
          id, // id do cliente
        },
      });

      return "Client successfully deleted";

    } catch (error) {
      error.path = "src/models/deleteClient.js";
      throw error;
    } finally {

      await prisma.$disconnect();
    }
  },
};