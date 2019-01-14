const express = require("express");
const Home = require('../models/home.model');
const City = require('../models/city.model');
const asm = require("../../src/utils/async_middleware");
const router = express.Router();


router.get(
  "/",
  asm(async (req, res) => {
    const find = await City.find();

    res.json(find);
  })
);

module.exports = router;
