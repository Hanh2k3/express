const express = require("express");
const router = express.Router();

// Load model
const Post = require("../models/Post");

// all post
router.get("/", async (req, res) => {
  const posts = await Post.find().lean().sort({ date: -1 });
  res.render("./posts/all", { posts });
});

// add post
router.get("/add", (req, res) => {
  // là một router
  res.render("./posts/add");
});

// save post
router.post("/", async (req, res) => {
  const { title, text } = req.body;

  let err = [];
  if (!title) err.push(title);
  if (!text) err.push(text);
  if (err.length > 0) res.render("./posts/add", { title, text });
  else {
    const newPostsData = { title, text };
    let newPosts = Post(newPostsData);
    await newPosts.save();
    res.redirect("/posts");
  }
});

// update post
router.get("/edit/:id", async (req, res) => {

  const post = await Post.findOne({ _id: req.params.id }).lean(); // find post follo id 
  res.render("./posts/edit", { post });
});

router.put('/edit/:id', async (req, res) => {
    console.log(req.params.id);
    const {title, text } = req.body;
    await Post.findOneAndUpdate({_id: req.params.id}, {title, text})
    res.redirect('/posts')
})

// delete post
router.delete('/delete/:id', async (req, res) => {
    await Post.findByIdAndDelete({_id: req.params.id})
    res.redirect('/posts')
})
module.exports = router;
