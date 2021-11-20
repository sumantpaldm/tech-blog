const seedUsers = require("./user-seed");
const seedPosts = require("./post-seed");
const seedComments = require("./comment-seed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log("USER");

  await seedPosts();
  console.log("POST");

  await seedComments();
  console.log("COMMENT");

  process.exit(0);
};

seedAll();
