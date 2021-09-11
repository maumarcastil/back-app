const { sequelize, Monitorias: monitoriasModel } = require('../models');

class MonitorService {
  async getOne(id) {
    const monitoria = await monitoriasModel.findOne({
      where: {
        id
      }
    });

    return monitoria;
  }

  async getAll() {
    const monitorias = await monitoriasModel.findAll();

    return monitorias;
  }
}

module.exports = MonitorService;
