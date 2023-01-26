
module.exports = {
    // Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}).
    // Ejemplo: http://localhost:3000/maths/dividir/10/0 o http://localhost:3000/maths/dividir/10/2
    dividir(req, res) {
        if (Number(req.params.divisor) === 0) {
        res.json({ error: "no se puede dividir por cero" });
        } else {
        res.json({
            resultado: Number(req.params.dividendo) / Number(req.params.divisor),
        });
        }
    },
    // Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}).
    // Ejemplo: http://localhost:3000/maths/sumar/5/-8 o http://localhost:3000/maths/sumar/5/7
    sumar(req, res) {
        if (Number(req.params.valor1) < 0 || Number(req.params.valor2) < 0) {
        res.json({ error: "no se puedan enviar números menores que cero" });
        } else {
        res.json({
            resultado: Number(req.params.valor1) + Number(req.params.valor2),
        });
        }
    },
    // Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , y si el número es par debe devolver res.send("autorizado").
    // Ejemplo: http://localhost:3000/maths/autorizar?numero=3 or http://localhost:3000/maths/autorizar?numero=2
    autorizar(req, res) {
        if (Number(req.query.numero) % 2 == 0) {
            res.send("autorizado");
        } else {
            res.send("no autorizado");
        }
    },
};
