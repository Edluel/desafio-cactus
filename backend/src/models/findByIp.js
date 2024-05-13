const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(ip) {
    try {
      let clients = await prisma.clientes.findMany({
        where: {
          ipConcentrador: ip,
        },
      });

      clients = JSON.stringify(clients, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );

      return clients;
        
    } catch (error) {
      error.path = "src/models/findByIp.js";
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  },
};