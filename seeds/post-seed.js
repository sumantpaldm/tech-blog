const { Post } = require("../models");

const postData = [
  {
    title: "what is mvc",
    post_text: "model view controller",
    user_id: 1,
  },
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
