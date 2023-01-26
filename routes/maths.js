/* en routers/maths poner todas las rutas relacionadas con suma, division y corroborar si el numero es par, poner el callback en un archivo controller. */
const express = require("express")
const router = express.Router()
const maths = require("../controllers/mathsController")

router.get("/dividir/:dividendo/:divisor", maths.dividir);
router.get("/sumar/:valor1/:valor2", maths.sumar);
router.get("/autorizar", maths.autorizar);

module.exports = router