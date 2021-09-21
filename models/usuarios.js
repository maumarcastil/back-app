"use strict";
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define(
    "Usuarios",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      documento: {
        type: DataTypes.STRING(500),
        defaultValue: null,
      },
      codigo_qr: {
        type: DataTypes.STRING(500),
        defaultValue: null,
        allowNull: true,
      },
      nombres: {
        type: DataTypes.STRING(500),
        defaultValue: null,
        allowNull: true,
      },
      correo: {
        type: DataTypes.STRING(500),
        defaultValue: null,
        allowNull: true,
      },
      celular: {
        type: DataTypes.STRING(20),
        defaultValue: null,
        allowNull: true,
      },
      tipo_documento: {
        type: DataTypes.STRING(250),
      },
      ciudad_pais: {
        type: DataTypes.STRING(128),
        defaultValue: null,
        allowNull: true,
      },
      institucion_origen: {
        type: DataTypes.STRING(125),
        allowNull: true,
      },
      ocupacion: {
        type: DataTypes.STRING(125),
        allowNull: true,
      },
      pregrado: {
        type: DataTypes.STRING(125),
        allowNull: true,
      },
      posgrado: {
        type: DataTypes.STRING(125),
        allowNull: true,
      },
      universidad_externa: {
        type: DataTypes.STRING(125),
        allowNull: true,
      },
      profesion: {
        type: DataTypes.STRING(128),
        defaultValue: null,
        allowNull: true,
      },
      tipo_invitacion: {
        type: DataTypes.STRING(128),
        defaultValue: null,
        allowNull: true,
      },
      medio: {
        type: DataTypes.STRING(250),
        defaultValue: null,
        allowNull: true,
      },
      fecha_nacimiento: {
        type: DataTypes.STRING(20),
        defaultValue: null,
        allowNull: true,
      },
      foto_tarjeta: {
        type: DataTypes.STRING(500),
        defaultValue: null,
        allowNull: true,
      },
      asistio: {
        type: DataTypes.STRING(500),
        defaultValue: "No",
        allowNull: true,
      },
      asistio_dia2: {
        type: DataTypes.STRING(500),
        defaultValue: "No",
        allowNull: true,
      },
      asistio_dia3: {
        type: DataTypes.STRING(500),
        defaultValue: "No",
        allowNull: true,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: "usuarios",
      timestamps: false,
    }
  );

  return Usuarios;
};
