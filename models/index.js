// Import the User, Blog, and Comment models
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

// Define the associations between the models using Sequelize's association methods
User.hasMany(Blog);
Blog.belongsTo(User);

Blog.hasMany(Comment);
Comment.belongsTo(Blog);

User.hasMany(Comment);
Comment.belongsTo(User);

// Export the models with their associations
module.exports = {
  User,
  Blog,
  Comment,
};
