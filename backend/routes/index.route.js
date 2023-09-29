const express = require("express");
const  { getPayments } = require('../controllers/getPayments.controller');
const router = express.Router();

router.get("/payments", getPayments)

module.exports = router;
