const { primeNumber } = require("../controller/prime");

const express = require("express");

const router = express.Router();

router.route("/prime").get(primeNumber)

module.exports = router