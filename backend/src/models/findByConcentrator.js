const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(concentrator) {
    try {
      const capitalizedConcentrator = concentrator.replace(/\b\w/g, (char) => char.toUpperCase());
      const formattedConcentrator = capitalizedConcentrator.replace(/\s+/g, '_');
      
      let clientes = await prisma.clientes.findMany({
        where: {
          nomeConcentrador: {
            contains: formattedConcentrator,
          }
        },
      });

      clientes = JSON.stringify(clientes, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );

      return clientes;

    } catch (error) {
      error.path = "src/models/findByConcentrator.js";
      throw error;

    } finally {
      await prisma.$disconnect();
    }
  },
};
