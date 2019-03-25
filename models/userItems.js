module.exports = function(sequlize, DataTypes) {
    let UserItem = sequlize.define("UserItem", {
        item_date: {
            type: DataType.INTEGER,
        },
        edited_date: {
            type: DataType.INTEGER,
        },

        primaryKey: true
    });


UserItem.associate = function(models) {
    models.UserItem.belongsTo(models.Food, {
        foreignKey: {
            type: Sequlize.INTEGER,
            references: {
                model: Food,
                key: "id"
            }
        }
    });

    models.UserItem.belongsTo(models.UserInfo, {
        foreignKey: {
            type: Sequlize.INTEGER,
            references: {
                model: UserInfo,
                key: "id"
            }
        }
    })
};

return UserItem;
};