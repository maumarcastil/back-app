const MonitoriasService = require('../services/monitorias');
const MonitoresService = require('../services/monitores');
const monitoriaService = new MonitoriasService();
const monitorService = new MonitoresService();

const resolvers = {
  Monitoria: {
    nombre: monitoria => monitoria.nombre,
    monitor: monitoria => monitorService.getOne(monitoria.id_monitores)
  },
  Query: {
    monitoria: (_, { id }) => monitoriaService.getOne(id),
    monitorias: () => monitoriaService.getAll(),
  },
};

module.exports = resolvers;
