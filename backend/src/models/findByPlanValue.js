const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute( choice, value) {
    if(choice === "gt") {
      try {
        let clients = await prisma.clientes.findMany({
          where: {
            valorPlano: {
              gte: parseFloat(value),
            }
          },
        });

        clients = JSON.stringify(clients, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        );

        return clients;

      } catch (error) {
        error.path = "src/models/findByPlanValue.js";
        throw error;
      } finally {
        await prisma.$disconnect();
      }
      
    } else {
      try {
        let clients = await prisma.clientes.findMany({
          where: {
            valorPlano: {
              lte: parseFloat(value),
            }
          },
        });
  
        clients = JSON.stringify(clients, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        );
  
        return clients;

      } catch (error) {
        error.path = "src/models/findByPlanValue.js";
        throw error;
      } finally {
        await prisma.$disconnect();
      }
    }
  },
};