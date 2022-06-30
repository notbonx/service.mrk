const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const EmailCTRL = require("./controllers/email.controller")

const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 3000

app.use(cors({
    origin: 'https://service.mrk-bsuir.by/',
    optionsSuccessStatus: 200
    ))
app.use(bodyParser.json())

const emailController = new EmailCTRL()

app.post('/email', emailController.postEmail)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
