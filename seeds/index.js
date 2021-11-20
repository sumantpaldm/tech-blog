const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

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
