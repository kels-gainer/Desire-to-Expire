module.exports = function(sequelize, DataTypes) {
    let UserInfo = sequelize.define("UserInfo", {

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

     primaryKey: true

    });

    return UserInfo;
};