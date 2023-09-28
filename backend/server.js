const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const config = require('./config')

const mongodbUrl = config.MONGODB_URL;
mongoose
.connect(mongodbUrl)
.catch((error) => console.log(error.reason));


const app = express();

app.get('/',(req, res) => {
    res.send('Hello from server')
})

app.listen(config.PORT, () => {
    console.log(`Server is running on PORT ${config.PORT}`)
});