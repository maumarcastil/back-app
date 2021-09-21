"use strict";
module.exports = (sequelize, DataTypes) => {
  const Conferencias = sequelize.define(
    "Conferencias",
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
      fecha: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true,
      },
      hora_inicio: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true,
      },
      hora_fin: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
      descripcion: {
        type: DataTypes.STRING(500),
        defaultValue: null,
        allowNull: true,
      },
      expositor: {
        type: DataTypes.STRING(128),
        defaultValue: null,
        allowNull: true,
      },
      lugar: {
        type: DataTypes.STRING(128),
        defaultValue: null,
        allowNull: true,
      },
      es_paralela: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
      },
      cupo: {
        type: DataTypes.BIGINT(),
        allowNull: true,
        defaultValue: null,
      },
      sector: {
        type: DataTypes.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 1,
      },
    },
    {
      tableName: "conferencias",
      timestamps: false,
    }
  );

  return Conferencias;
};
