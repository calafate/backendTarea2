// Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}).
// Ejemplo: http://localhost:3000/list/lista-de-compras?p1=fideos&p2=papas&p3=mayonesa&p4=queso&p5=jamon
module.exports = {
    listaCompras(req, res) {
    res.json({
        p1: req.query.p1,
        p2: req.query.p2,
        p3: req.query.p3,
        p4: req.query.p4,
        p5: req.query.p5,
    });
    },
};
