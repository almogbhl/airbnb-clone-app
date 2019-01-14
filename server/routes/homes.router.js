const express = require("express");
const Home = require('../models/home.model');
const asm = require("../../src/utils/async_middleware");
const router = express.Router();



router.get(
  "/",
  asm(async (req, res) => {
    const find = await Home.find();

    res.json(find);
  })
);
router.get(
  "/city/:city",
  asm(async (req, res) => {
    const find = await Home.find({city: req.params.city});

    res.json(find);
  })
);

router.get(
  "/country/:country",
  asm(async (req, res) => {
    const find = await Home.find({country: req.params.country});

    res.json(find);
  })
);

router.get(
  "/toprated",
  asm(async (req, res) => {
    const find = await Home.find({rating_stars: 5});

    res.json(find);
  })
);
router.get(
  "/superhost",
  asm(async (req, res) => {
    const find = await Home.find({superhost: true});

    res.json(find);
  })
);

module.exports = router;
