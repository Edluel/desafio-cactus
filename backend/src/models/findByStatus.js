const { PrismaClient } = require("@prisma/client");
const logger = require("../custom/logger");

const prisma = new PrismaClient();

module.exports = {
  async execute(status) {
    try {
      // converte a string para boolean
      const statusBoolean = status === "true";
      
      let clients = await prisma.clientes.findMany({
          where: {
            statusCliente: statusBoolean,
          },
      });
  
      clients = JSON.stringify(clients, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
      );
    
      return clients;
            
    } catch (error) {
      error.path = "src/models/findByStatus.js";
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  },
};