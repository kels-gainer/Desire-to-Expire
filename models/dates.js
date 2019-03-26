'use strict'

module.exports = (sequelize, DataTypes) => {
    const Food = sequelize.define("Food", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      userItem_id: {
        type: DataTypes.UUID,
        allowNull: false
      },     
      food_name: {
          type: DataTypes.STRING,
          allowNull: false  
      },
      category : {
        type: DataTypes.STRING,
        allowNull: false
      },
      ex_dates : {
          type: DataTypes.INTEGER,
          allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at:  DataTypes.DATE,
      deleted_at: DataTypes.DATE,
      freezeTableName: true,
    });

    return Food;
};