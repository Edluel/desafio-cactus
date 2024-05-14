const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute( choice, duration) {
    if(choice === "gt") {
      try {
        let clients = await prisma.clientes.findMany({
          where: {
            tempoConectado: {
              gte: parseInt(duration),
            }
          },
        });

        clients = JSON.stringify(clients, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        );

        return clients;

      } catch (error) {
        error.path = "src/models/findByConnectedTime.js";
        throw error;
      } finally {
        await prisma.$disconnect();
      }
      
    } else {
      try {
        let clients = await prisma.clientes.findMany({
          where: {
            tempoConectado: {
              lte: parseInt(duration),
            }
          },
        });
  
        clients = JSON.stringify(clients, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        );
  
        return clients;

      } catch (error) {
        error.path = "src/models/findByConnectedTime.js";
        throw error;
      } finally {
        await prisma.$disconnect();
      }
    }
  },
};