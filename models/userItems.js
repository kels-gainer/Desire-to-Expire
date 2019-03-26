// module.exports = function(sequlize, DataTypes) {
//     let UserItem = sequlize.define("UserItem", {
//         item_date: {
//             type: DataTypes.INTEGER,
//         },
//         edited_date: {
//             type: DataTypes.INTEGER,
//         },

//         primaryKey: true
//     });


// UserItem.associate = function(models) {
//     models.UserItem.belongsTo(models.Food, {
//         foreignKey: {
//             type: sequlize.INTEGER,
//             references: {
//                 model: Food,
//                 key: "id"
//             }
//         }
//     });

//     models.UserItem.belongsTo(models.UserInfo, {
//         foreignKey: {
//             type: sequlize.INTEGER,
//             references: {
//                 model: UserInfo,
//                 key: "id"
//             }
//         }
//     })
// };

// return UserItem;
// };

'use strict'

module.exports = (sequelize, DataTypes) => {
    const UserItem = sequelize.define("UserInfo", {
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
        allowNull: false,
     },
     ex_date : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at:  DataTypes.DATE,
      deleted_at: DataTypes.DATE
    });

    return UserItem;
};