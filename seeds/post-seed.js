const postdata = [
  {
    title: "WHAT IS ORM",
    description:
      "ORM stands for object-relational mapping, where objects are used to connect the programming language on to the database systems, with the facility to work SQL and object-oriented programming concepts.",
    user_id: 1,
  },
  {
    title: "WHAT IS MVC",
    description:
      "MVC (Model, View, Controller) is a pattern for organising code in an application to improve maintainability. Imagine a photographer with his camera in a studio. A customer asks him to take a photo of a box. The box is the model, the photographer is the controller and the camera is the view.",
    user_id: 2,
  },
  {
    title: "WHAT IS JS",
    description:
      "an object-oriented computer programming language commonly used to create interactive effects within web browsers.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
