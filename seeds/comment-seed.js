const Comment = require("../models/Comment");

const commentdata = [
  {
    comment_text: "TEST!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "TEST!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "TEST!",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
