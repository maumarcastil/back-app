"use strict";
module.exports = (sequelize, DataTypes) => {
  const Conferencistas = sequelize.define(
    "Conferencistas",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      nombres: {
        type: DataTypes.STRING(128),
        defaultValue: null,
        allowNull: true,
      },
      frase: {
        type: DataTypes.STRING(500),
        defaultValue: null,
        allowNull: true,
      },
      perfil: {
        type: DataTypes.STRING(500),
        defaultValue: null,
        allowNull: true,
      },
      foto: {
        type: DataTypes.STRING(500),
        defaultValue: null,
        allowNull: true,
      },
      foto_bandera: {
        type: DataTypes.STRING(500),
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
      tableName: "conferencistas",
      timestamps: false,
    }
  );

  return Conferencistas;
};
