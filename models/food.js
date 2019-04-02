module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define(
    "Food",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        //allowNull: false
      },
      userItem_id: {
        type: DataTypes.UUID,
        //allowNull: false
      },
      food_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ex_dates: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  Food.associate = function(models) {
    // We're saying that a Food should belong to an UserInfo
    Food.belongsTo(models.UserItems, {
      foreignKey: {
        // Do something here??
      }
    });
  };
  return Food;
};