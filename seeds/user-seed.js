const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    username: "asdfgh",
    password: "password",
  },
  {
    username: "qwerty",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

seedUsers();

module.exports = seedUsers;
