
const  User = require("../models/User");

const userdata = [
  {
    username: "test1",
    email: "test1@test.com",
    password: "password123",
  },
  {
    username: "test2",
    email: "test2@test.com",
    password: "password1234",
  },
  {
    username: "test3",
    email: "test3@test.com",
    password: "password1235",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
