// Import the database connection and models
const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

// Initial data for users
const users = [
    {
        username: "jalu",
        password: "jalupassword"
    },
    {
        username: "vivek",
        password: "vivekpassword"
    },
    {
        username: "anu",
        password: "anupassword"
    },

]

// Initial data for blogs
const blogs = [
    {
        title: "Introduction to MVC Design Pattern",
        content: " MVC is a vital design pattern used in software engineering to split applications into manageable sections, allowing developers to focus on specific aspects step by step. It enhances application security and logical structuring.",
        userId: 1
    },
    {
        title: "Implementing Express Routing in Node.js",
        content: "Express.js simplifies routing in Node.js using the app object for handling HTTP requests with defined routes and callback functions for different request types.",
        userId: 1
    },
    {
        title: "Understanding Sequelize Models",
        content: "Sequelize models represent database tables, providing an abstraction that includes table name, column details, and data types. They streamline database interactions in Sequelize. add one more title and content",
        userId: 2
    },
    {
        title: "Building Responsive Web UI with React",
        content: "Explore how React, a powerful JavaScript library for user interfaces, creates responsive web apps with interactive components, efficient state management, and optimal user experience.",
        userId: 3
    },
]

// Initial data for comments
const comments = [
    {
        body: "great post!",
        blogId: 1,
        userId: 1
    },
    {
        body: "i agree!",
        blogId: 3,
        userId: 2
    },
    {
        body: "well said!",
        blogId: 4,
        userId: 1
    },
    {
        body: "happy monday!",
        blogId: 2,
        userId: 3
    },

]
// Function to plant the initial data into the database
const plantSeeds = async ()=>{
    try{
        // Sync the database with the models and force the creation of tables
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}
// Call the plantSeeds function to start the seeding process
plantSeeds()