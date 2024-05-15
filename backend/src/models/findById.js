const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(id) {
    try {
      // busca o cliente pelo id
      let clientes = await prisma.clientes.findUnique({
        where: {
          id, // id do cliente
        },
      });

      if (!clientes) {
        throw new Error('client not found');
      }
      // converte os valores bigint para string
      clientes = JSON.stringify(clientes, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );
      return clientes;
    } catch (error) {
      // registra o caminho do erro
      error.path = "src/models/findById.js";
      throw error;
    } finally {
      // desconecta o Prisma Client do banco de dados
      await prisma.$disconnect();
    }
  },
};
