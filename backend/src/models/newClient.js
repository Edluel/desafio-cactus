const { PrismaClient } = require("@prisma/client");
const { execute } = require("./findManyClientes");

const prisma = new PrismaClient();

module.exports = {
  async execute(data){
    try {
      await prisma.clientes.create({
        data,
      });

      return res.status(200).json({ message: "client successfully created" });

      
    } catch (error) {
      error.path = "src/models/createClient.js";
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  },
};

// module.exports = {
//   async execute() {
//     try {
//       await prisma.clientes.create({
//         data: {
          // id: '29ba742c-f0b0-4a9e-8a03-e2a2db3284e9',
          // statusCliente: true,
          // ipConcentrador: '192.168.1.10',
          // nomeConcentrador: 'Concentrador A',
          // latitudeCliente: '40.7128',
          // longitudeCliente: '-74.0060',
          // conexaoInicial: new Date('2024-05-14 10:00:00'),
          // tempoConectado: 120,
          // consumoDownload: 1024000,
          // consumoUpload: 512000,
          // motivoDesconexao: 'Client disconnected due to maintenance',
          // popCliente: 'POP Central',
          // nomeCliente: 'John Doe',
          // enderecoCliente: '123 Main St',
          // bairroCliente: 'Downtown',
          // cidadeCliente: 'New York',
          // planoContrato: 'Premium Plan',
          // statusInternet: 1,
          // valorPlano: 99.99,
//         }
//       });
//     } catch (error) {
//       error.path = 'src/models/updateClient.js';
//       throw error;
//     } finally {
//       await prisma.$disconnect();
//     }
//   },
// };