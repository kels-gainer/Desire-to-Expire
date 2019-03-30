module.exports = (sequelize, DataTypes) => {
    const UserItems = sequelize.define(
      "UserItems",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
          // defaultValue: DataTypes.UUIDV4,
          // allowNull: false
        },
        user_email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false
        },
        ex_date: {
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
  
    UserItems.associate = function(models) {
      // Associating UserItem with Food
      UserItems.hasMany(models.Food, {
        // Do something here??
      });
    };
  
    return UserItems;
  };