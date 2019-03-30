"use strict";

//To seed this data use the following command in your terminal:
//    sequelize db:seed:all

module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.bulkInsert(
        "UserItems",
        [
          {
            user_email: "joe@blah.com",
            name: "Apple",
            category: "Fruit",
            ex_date: 21,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
          },
          {
            user_email: "joe@blah.com",
            name: "Orange",
            category: "Fruit",
            ex_date: 21,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
          },
          {
            user_email: "joe@blah.com",
            name: "Raddish",
            category: "Root Veggies",
            ex_date: 14,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
          },
          {
            user_email: "joe@blah.com",
            name: "Milk",
            category: "Dairy",
            ex_date: 14,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
          },
          {
            user_email: "joe@blah.com",
            name: "Butter",
            category: "Dairy",
            ex_date: 60,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
          }
        ],
        {}
      );
    },
  
    down: function(queryInterface, Sequelize) {
      return queryInterface.bulkDelete("UserItems");
    }
  };