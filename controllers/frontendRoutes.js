const express = require("express");
const router = express.Router();
const { User, Blog, Comment } = require("../models");

// Route to display the home page with a list of blogs
router.get("/", (req, res) => {
  Blog.findAll({ include: [User] }).then((blogs) => {
    const hbsBlogs = blogs.map((blog) => blog.get({ plain: true }));
    const loggedIn = req.session.user ? true : false;
    res.render("home", {
      blogs: hbsBlogs,
      loggedIn,
      username: req.session.user?.username,
    });
  });
});
// Route to display the login page
router.get("/login", (req, res) => {
  if (req.session.user) {
    return res.redirect("/dashboard");
  }
  res.render("login");
});
// Route to display the signup page

router.get("/signup", (req, res) => {
  res.render("signup");
});
// Route to display the dashboard page
router.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  User.findByPk(req.session.user.id, {
    include: [Blog, Comment],
  }).then((userData) => {
    const hbsData = userData.get({ plain: true });
    hbsData.loggedIn = req.session.user ? true : false;
    res.render("dashboard", hbsData);
  });
});

// Route to display a single blog post page with its comments
router.get("/blogs/:id", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  Blog.findByPk(req.params.id, {
    include: [User, { model: Comment, include: [User] }],
  })
    .then((dbBlog) => {
      const hbsBlog = dbBlog.get({ plain: true });
      const loggedIn = req.session.user ? true : false;
      console.log("==============");
      console.log(hbsBlog);
      if (dbBlog.userId != req.session.user.id) {
        // If not your post -> render the comment page
        return res.render("comment", {
          hbsBlog,
          loggedIn,
          username: req.session.user?.username,
        });
      }
      // If your post -> render update/delete page over your dashboard
      res.render("updateDelete", {
        hbsBlog,
        loggedIn,
        username: req.session.user?.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
// Route for all other unspecified routes, redirects to home page
router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
