const express = require("express");
const router = express.Router();
const { User, Blog, Comment } = require("../../models/");
const bcrypt = require("bcrypt");

// API route to get all users and their associated blogs and comments
router.get("/", (req, res) => {
  User.findAll({
    include: [Blog, Comment],
  })
    .then((dbUsers) => {
      res.json(dbUsers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// API route to log out the user
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

// API route to get a specific user by their ID along with their blogs and comments
router.get("/:id", (req, res) => {
  User.findByPk(req.params.id, { include: [Blog, Comment] })
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// sign up api/users/
router.post("/", (req, res) => {
  // Create a new user in the database with the provided data in the request body
  User.create(req.body, { individualHooks: true })
    .then((newUser) => {
      req.session.user = {
        id: newUser.id,
        username: newUser.username,
      };
      res.json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// API route to handle user login
router.post("/login", (req, res) => {
  // Find the user in the database based on the provided username in the request body
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((foundUser) => {
      // Check if the user exists in the database
      if (!foundUser) {
        return res.status(400).json({ msg: "wrong login credentials" });
      }
      // Compare the password provided in the request body with the hashed password stored in the database
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // If the password is correct, create a session for the user with their ID and username
        req.session.user = {
          id: foundUser.id,
          username: foundUser.username,
        };
        return res.json(foundUser);
        // If the password is incorrect, return a 400 status with an error message
      } else {
        return res.status(400).json({ msg: "wrong login credentials" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
// API route to update a user's information
router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
    individualHooks: true,
  })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
// API route to delete a user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delUser) => {
      res.json(delUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
