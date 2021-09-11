'use strict';
module.exports = (sequelize, DataTypes) => {
  const Monitorias = sequelize.define(
    'Monitorias',
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(500),
      },
      id_monitores: {
        type: DataTypes.BIGINT(20),
      }
    },
    {
      tableName: 'monitorias',
      timestamps: false,
    }
  );

  Monitorias.associate = function (models) {
    Monitorias.belongsTo(models.Monitores, {
      foreignKey: 'id_monitores',
      as: 'monitores',
    });
  };

  return Monitorias;
};