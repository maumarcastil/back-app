'use strict';
module.exports = (sequelize, DataTypes) => {
  const Monitores = sequelize.define(
    'Monitores',
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(500),
      },
    },
    {
      tableName: 'monitores',
      timestamps: false,
    }
  );

  Monitores.associate = function (models) {
    Monitores.hasMany(models.Monitorias, {
      foreignKey: 'id_monitores',
      as: 'monitorias',
    });
  };

  return Monitores;
};