const express = require("express")
const router = express.Router()
const api = require("../controllers/apiController")


router.post('/crear', api.crearPost)

module.exports = router