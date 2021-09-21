"use strict";
module.exports = (sequelize, DataTypes) => {
  const RegistrosConferencias = sequelize.define(
    "RegistrosConferencias",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
        allowNull: true,
      },
    },
    {
      tableName: "registros_conferencias",
      timestamps: false,
    }
  );

  RegistrosConferencias.associate = function (models) {
    RegistrosConferencias.belongsTo(models.Usuarios, {
      foreignKey: "usuario_id",
      as: "usuarios",
    });
    RegistrosConferencias.belongsTo(models.Conferencias, {
      foreignKey: "conferencia_id",
      as: "conferencias",
    });
  };

  return RegistrosConferencias;
};
