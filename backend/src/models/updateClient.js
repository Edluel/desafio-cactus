 const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  async execute(id, data) {
    try {
      const cliente = await prisma.clientes.findUnique({
        where: {
          id,
        },
      });

      if (!cliente) {
        throw new Error('client not found');
      }

      await prisma.clientes.update({
        where: {
          id,
        },
        data,
      });
          
    } catch (error) {
      error.path = 'src/models/updateClient.js';
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  },
};