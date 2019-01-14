const express = require("express");
const Post = require('../models/post.model');
const asm = require("../../src/utils/async_middleware");
const router = express.Router();


router.get(
  "/",
  asm(async (req, res) => {
    const find = await Post.find().limit(8);

    res.json(find);
  })
);
router.get(
  "/test",
  asm(async (req, res) => {
    

    res.json('test');
  })
);


module.exports = router;
