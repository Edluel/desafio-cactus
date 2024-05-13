const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(reason) {
    try {
      const capitalizedReason = reason.replace(/\b\w/g, (char) => char.toUpperCase());
      const formattedReason = capitalizedReason.replace(/\s+/g, '-');
      
      let clientes = await prisma.clientes.findMany({
        where: {
          motivoDesconexao: {
            contains: formattedReason,
          }
        },
      });

      clientes = JSON.stringify(clientes, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );

      return clientes;

    } catch (error) {
      error.path = "src/models/findByDisconnectReason.js";
      throw error;

    } finally {
      await prisma.$disconnect();
    }
  },
};
