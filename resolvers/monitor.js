const MonitoresService = require('../services/monitores');
const monitorService = new MonitoresService();

const resolvers = {
  Monitor: {
    nombre: monitor => monitor.nombre
  },
  Query: {
    monitor: (_, { id }) => monitorService.getOne(id),
    monitores: () => monitorService.getAll(),
  },
};

module.exports = resolvers;
