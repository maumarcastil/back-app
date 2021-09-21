"use strict";
module.exports = (sequelize, DataTypes) => {
  const Patrocinadores = sequelize.define(
    "Patrocinadores",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      nombres: {
        type: DataTypes.STRING(500),
        defaultValue: null,
        allowNull: true,
      },
      foto: {
        type: DataTypes.STRING(500),
        defaultValue: null,
        allowNull: true,
      },
      link: {
        type: DataTypes.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
        allowNull: true,
      },
    },
    {
      tableName: "patrocinadores",
      timestamps: false,
    }
  );

  return Patrocinadores;
};
