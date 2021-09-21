"use strict";
module.exports = (sequelize, DataTypes) => {
  const Notificaciones = sequelize.define(
    "Notificaciones",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      texto: {
        type: DataTypes.STRING(500),
        defaultValue: null,
        allowNull: true,
      },
      fecha: {
        type: DataTypes.DATE,
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
      tableName: "notificaciones",
      timestamps: false,
    }
  );

  return Notificaciones;
};
