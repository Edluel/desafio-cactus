const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(plan) {
    try {
      const capitalizedPlan = plan.charAt(0).toUpperCase() + plan.slice(1);
      let clients = await prisma.clientes.findMany({
        where: {
          planoContrato: {
            contains: capitalizedPlan,
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