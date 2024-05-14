const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(startDate, endDate) {
    try {
      const sDate = new Date(startDate); //yyyy-mm-ddT00:00:00.000Z
      const eDate = new Date(endDate);
      eDate.setDate(eDate.getDate() + 1); //adiciona 1 dia para contabilizar todo o dia final

      let clients = await prisma.$queryRaw`SELECT * FROM clientes WHERE "conexaoInicial" >= ${sDate} AND "conexaoInicial" <= ${eDate}`;

      clients = JSON.stringify(clients, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );

      return clients;

    } catch (error) {
      error.path = "src/models/findByConnectionStart.js";
      throw error;

    } finally {
      await prisma.$disconnect();
    }
  },
};