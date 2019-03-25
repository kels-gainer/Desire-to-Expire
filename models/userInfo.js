'use strict'

module.exports = (sequelize, DataTypes) => {
    const UserInfo = sequelize.define("UserInfo", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        // something?
        }
     },
     created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE

    });

    return UserInfo;
};