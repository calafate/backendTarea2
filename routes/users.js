/* en routers/users poner la ruta que recibe apellido y nombre para generar un saludo, poner el callback en un archivo controller. */
const express = require("express")
const router = express.Router()
const users = require("../controllers/usersController")

router.get('/saludo/:nombre/:apellido', users.usersHello)


module.exports = router


