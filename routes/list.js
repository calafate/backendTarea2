// en routers/list poner la ruta que crea el listado de las compras,  poner el callback en un archivo controller.
const express = require("express");
const router = express.Router()
const list = require("../controllers/listController")

router.get('/lista-de-compras', list.listaCompras);

module.exports = router