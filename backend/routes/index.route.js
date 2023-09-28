const express = require("express");
const mockdata = require('../mockdata')

const router = express.Router();

router.get("/payments", async (req, res) => {
    res.send(mockdata.payments)
})

module.exports = router;
