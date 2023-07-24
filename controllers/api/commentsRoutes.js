const express = require("express");
const router = express.Router();
const { User, Blog, Comment } = require("../../models");

// Route to get all comments along with associated users and blogs
router.get("/", (req, res) => {
  Comment.findAll({ include: [User, Blog] })
    .then((dbComments) => {
      res.json(dbComments);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// Route to get a specific comment by its ID along with associated user and blog
router.get("/:id", (req, res) => {
  Comment.findByPk(req.params.id, { include: [User, Blog] })
    .then((dbComment) => {
      res.json(dbComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
// Route to create a new comment,// Check if the user is authenticated (logged in) before creating a new comment
router.post("/", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Please login first!" });
  }
  Comment.create({
    body: req.body.body,
    userId: req.session.user.id,
    blogId: req.body.blogId,
  })
    .then((newComment) => {
      res.json(newComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
// Route to update a specific comment by its ID
router.put("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Please login first!" });
  }
  // Update the comment with the provided data in the request body where the ID matches the specified ID
  Comment.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedComment) => {
      res.json(updatedComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// Route to delete a specific comment by its ID
router.delete("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Please login first!" });
  }

  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delComment) => {
      res.json(delComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
