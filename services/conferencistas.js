const { sequelize, Conferencistas: conferencistasModel } = require("../models");

class ConferencistasService {
  async getOne(id) {
    const conferencitas = await conferencistasModel.findOne({
      where: {
        id,
      },
    });
    return conferencitas;
  }

  async getAll() {
    const conferencitas = await conferencistasModel.findAll();

    return conferencitas;
  }
}

module.exports = ConferencistasService;
