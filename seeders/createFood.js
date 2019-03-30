"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Food",
      [
        {
          food_name: "Apple",
          category: "Fruit",
          ex_dates: 21,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Orange",
          category: "Fruit",
          ex_dates: 21,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Grapes",
          category: "Fruit",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Banana",
          category: "Fruit",
          ex_dates: 3,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Herbs (fresh)",
          category: "Veggies",
          ex_dates: 14,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Milk",
          category: "Dairy",
          ex_dates: 14,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Butter",
          category: "Dairy",
          ex_dates: 60,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Cream",
          category: "Dairy",
          ex_dates: 14,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Cheese",
          category: "Dairy",
          ex_dates: 30,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Sour cream",
          category: "Dairy",
          ex_dates: 14,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Yogurt",
          category: "Dairy",
          ex_dates: 30,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Ground meat",
          category: "Meat",
          ex_dates: 3,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Lunch meat",
          category: "Meat",
          ex_dates: 14,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Steaks",
          category: "Meat",
          ex_dates: 3,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Roasts",
          category: "Meat",
          ex_dates: 3,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Asparagus",
          category: "Veggies",
          ex_dates: 3,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Hot Dogs",
          category: "Meat",
          ex_dates: 14,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Bacon",
          category: "Meat",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Sausage",
          category: "Meat",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Eggs",
          category: "Meat",
          ex_dates: 35,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Poltry",
          category: "Meat",
          ex_dates: 3,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Fish",
          category: "Seafood",
          ex_dates: 2,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Smoked fish",
          category: "Seafood",
          ex_dates: 10,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Shellfish",
          category: "Seafood",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Melons",
          category: "Fruit",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Bread",
          category: "Grains",
          ex_dates: 14,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Corn",
          category: "Veggies",
          ex_dates: 3,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Potatos",
          category: "Root Veggies",
          ex_dates: 14,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Carrots",
          category: "Root Veggies",
          ex_dates: 14,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Cabbage",
          category: "Veggies",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Celery",
          category: "Veggies",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Lettuce",
          category: "Veggies",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Peppers",
          category: "Veggies",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Squash",
          category: "Veggies",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Mushrooms",
          category: "Veggies",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Tomatoes",
          category: "Veggies",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Broccoli",
          category: "Veggies",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Spinach",
          category: "Veggies",
          ex_dates: 7,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          food_name: "Radish",
          category: "Root Veggies",
          ex_dates: 14,
          created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Foods");
  }
};
