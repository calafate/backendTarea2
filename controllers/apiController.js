/* BACKEND- tarea 2
crear una ruta con el metodo HTTP POST que haga lo siguiente: devolver un objeto JSON que contenga lo siguiente:
    {
        "nombre": "ACA VA EL NOMBRE",
        "status":"success"
    }
  el nombre que reciba se debe enviar por req.body.nombre 
  Ejemplo: http://localhost:3000/api/crear/ */

module.exports = {
    crearPost (req, res) {
        res.send(req.body.nombre)
    }
}
