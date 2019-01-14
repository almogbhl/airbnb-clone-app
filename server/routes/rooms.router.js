const express = require("express");
const Room = require('../models/room.model');
const Post = require('../models/post.model');
const asm = require("../../src/utils/async_middleware");
const router = express.Router();

router.get(
  "/:id",
  asm(async (req, res) => {
    const find = await Room.find({_id: req.params.id});

    res.json(find);
  })
);



module.exports = router;
