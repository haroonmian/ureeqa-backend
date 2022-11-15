const express = require("express")
var cors = require('cors')
const app = express()

app.use(express.json())

app.use(cors())

const prime = require("./routes/primeRoutes");

app.use("/api/v1", prime);

module.exports = app