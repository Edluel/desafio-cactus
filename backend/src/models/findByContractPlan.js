const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(plan) {
    try {
      let clients = await prisma.clientes.findMany({
        where: {
          planoContrato: {
            contains: plan,
          },
        },
      });

      clients = JSON.stringify(clients, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );

      return clients;

    } catch (error) {
      error.path = "src/models/findByContractPlan.js";
      throw error;

    } finally {
      await prisma.$disconnect();
    }
  },
};