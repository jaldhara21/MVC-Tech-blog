// Import required modules from Sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Define the Comment model
class Comment extends Model {}

Comment.init(
  {
    // Define the 'body' attribute for the comment
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Define the 'date' attribute for the comment
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment", // The model name to use in associations and queries
  }
);

// Export the Comment model
module.exports = Comment;
