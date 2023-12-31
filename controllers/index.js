// Import required modules
const express = require('express');
const router = express.Router();

const userRoutes = require("./api/userRoutes.js");
router.use("/api/users",userRoutes)

const blogRoutes = require("./api/blogRoutes");
router.use("/api/blogs",blogRoutes)

const commentRoutes = require("./api/commentsRoutes");
router.use("/api/comments",commentRoutes)

const frontEnd = require("./frontendRoutes");
router.use("/",frontEnd)

router.get("/showsessions",(req,res)=>{
    res.json(req.session)
})
// Export the main Express router
module.exports = router;