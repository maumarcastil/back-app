"use strict";
module.exports = (sequelize, DataTypes) => {
  const Contactos = sequelize.define(
    "Contactos",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      tableName: "contactos",
      timestamps: false,
    }
  );

  Contactos.associate = function (models) {
    Contactos.belongsTo(models.Usuarios, {
      foreignKey: "usuario_id",
      as: "usuarios",
    });
  };

  return Contactos;
};
