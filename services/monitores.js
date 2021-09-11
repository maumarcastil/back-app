const { sequelize, Monitores: monitorModel } = require('../models');

class MonitorService {
  async getOne(id) {
    const monitor = await monitorModel.findOne({
      where: {
        id
      }
    });

    return monitor;
  }

  async getAll() {
    const monitores = await monitorModel.findAll();

    return monitores;
  }
}

module.exports = MonitorService;
