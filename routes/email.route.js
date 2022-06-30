const express = require("express")
const router = express.Router();

router.post('/about', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Vary', 'Origin')
    res.send('About this wiki');
    res.end()
})


module.exports = router
