// Import required modules from Sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class User extends Model {}

User.init({
    // Define the 'username' attribute for the user
    username: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    // Define the 'password' attribute for the user
    password:{
        type:DataTypes.STRING,
        allowNull:false, // The 'password' cannot be empty
        validate:{
            len:[8] // The 'password' must have a minimum length of 8 characters
        }
    }
},{
    // Define the hooks for the User model
    hooks:{
        beforeCreate:async userdata=>{
            // Hash the user's password using bcrypt with a salt factor of 5
            userdata.password = await bcrypt.hash(userdata.password,5)
            return userdata
        }
    },
    sequelize,   
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});
// Export the User model
module.exports=User