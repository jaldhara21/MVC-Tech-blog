# MVC-Tech-blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description.

The Tech Blog is Heroku deployed application, which serves as a CMS-style platform designed for newcomers alike. It allows those in the blog communtiy to publish blog posts based on their thoughts and opinions. Additionally, the comment section below, allows users to interact and engage with another on blog posts. The application follows the MVC paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [License](#License)
- [question](#question)

# Overview

## The Challenge:

The challenge of building this application involved creating a scalable and robust platform that could support multiple users, blog post and comments. The application was designed with security in mind, allowing users to authenticate themselves and protect their personal data. Furthermore, the application had to be built using modern web development technologies and follow best practices, including the MVC architecture pattern.

## Assigned User Story:
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## Acceptance Criteria:
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Screenshots
Home page<br>
![Home page](./public/assets/image/The%20Tech%20bolg%20home%20page.gif)
<br>
Add New Post<br>
![Add new post](./public/assets/image/Add%20new%20post.gif)
<br>
Update/Delete your post, or comment on someone else's<br>
![Update/Delete/Comment](./public/assets/image/Update%20and%20Delete%20post.gif)


## Usage Instructions:

#### Visit the homepage, "Login" or "Sign Up" for an account if you don't already have one.
1. Visit the deployed application's homepage.
2. Sign Up or Login to access the site.
3. View existing blog posts on the homepage.
4. Click on a blog post to read it and leave comments.
5. Go to the Dashboard to manage your blog posts.
6. Add, update, or delete blog posts from your dashboard.
7. Click on "Logout" to sign out of the site.


## Deployed Application Link:
[Deployed Application Link:]()

## GitHub Repository:
[GitHub Repository:]()
 

## Installation Process
1. Clone the Repository from GitHub 
(or) Download Zip Folder from Repository from GitHub
Open the cloned (or downloaded) repository in any source code editor.

## Built With:
- Saiyan Pride
- JSON:[ JSON](https://www.npmjs.com/package/json)
- Dynamic JavaScript
- Node.js [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Bcrypt: [5.1.0](https://www.npmjs.com/package/bcrypt)
- Connect Session Store using Sequelize: [7.1.7](https://www.npmjs.com/package/connect-session-sequelize)
- Dotenv: [16.3.1](https://www.npmjs.com/package/dotenv)
- Express: [4.17.1](https://www.npmjs.com/package/express)
- Express Handlebars: [7.0.7](https://www.npmjs.com/package/express-handlebars)
- Express-Session: [1.17.3](https://www.npmjs.com/package/express-session)
- Node MySql2: [3.5.2](https://www.npmjs.com/package/mysql2)
- Sequelize: [6.32.1](https://www.npmjs.com/package/sequelize)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned:
1. Implementing Model-View-Controller (MVC) architecture.
2. Creating and interacting with a MySQL database using Sequelize ORM.
3. Creating and using Express.js servers and routes.
4. Using Handlebars.js to create and display dynamic templates.
5. Implementing user authentication and password hashing with bcrypt.
6. Using Bootstrap for styling and layout.


## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

## Questions

For additional questions, you can reach me through:

- GitHub: [jaldhara21](https://github.com/jaldhara21)
- Email: jaldharapatel91@gmail.com