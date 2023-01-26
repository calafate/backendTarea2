// Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).
// Ejemplo: http://localhost:3000/users/saludo/Sol/Luna
module.exports = {
    usersHello (req, res) {
        (res.status(200).send(`Hola ${req.params.nombre} ${req.params.apellido}`))
    }
}