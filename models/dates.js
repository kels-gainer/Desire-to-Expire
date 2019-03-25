module.exports = function(sequelize, DataTypes) {
    let Food = sequelize.define("Food", {
        
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
      primaryKey: true
    });

    return Food;
};