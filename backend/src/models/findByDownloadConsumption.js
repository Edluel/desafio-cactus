const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute( choice, consumption) {
    if(choice === "gt") {
      try {
        let clients = await prisma.clientes.findMany({
          where: {
            consumoDownload: {
              gte: parseInt(consumption),
            }
          },
        });

        clients = JSON.stringify(clients, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        );

        return clients;

      } catch (error) {
        error.path = "src/models/findByDownloadConsumption.js";
        throw error;
      } finally {
        await prisma.$disconnect();
      }
      
    } else {
      try {
        let clients = await prisma.clientes.findMany({
          where: {
            consumoDownload: {
              lte: parseInt(consumption),
            }
          },
        });
  
        clients = JSON.stringify(clients, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        );
  
        return clients;

      } catch (error) {
        error.path = "src/models/findByDownloadConsumption.js";
        throw error;
      } finally {
        await prisma.$disconnect();
      }
    }
  },
};