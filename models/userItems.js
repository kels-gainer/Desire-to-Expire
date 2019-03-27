module.exports = (sequelize, DataTypes) => {
    const UserItem = sequelize.define(
      "UserInfo",
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false
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
  
    UserItem.associate = function(models) {
      // Associating UserItem with Food
      UserItem.hasMany(models.Food, {
        // Do something here??
      });
    };
  
    return UserItem;
  };