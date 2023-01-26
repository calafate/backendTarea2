# BACKEND - tarea 2
## Crear un nuevo proyecto con express-generator y migrar el código de la clase pasada siguiendo las siguientes pautas: 


- en routers/users poner la ruta que recibe apellido y nombre para generar un saludo, poner el callback en un archivo controller.

- en routers/maths poner todas las rutas relacionadas con suma, division y corroborar si el numero es par, poner el callback en un archivo controller.

- en routers/list poner la ruta que crea el listado de las compras,  poner el callback en un archivo controller.

- crear una ruta con el metodo HTTP POST que haga lo siguiente: 
    devolver un objeto JSON que contenga lo siguiente:
    {"nombre": "ACA VA EL NOMBRE", "status":"success"}
    el nombre que reciba se debe enviar por req.body.nombre



## Para correr el servidor, abrir una terminal y ejecutar:

```sh
node app.js
```



## Rutas para probar los ejercicios:


| Método | Ruta |
| ------ | ------ |
| GET | [http://localhost:3000/users/saludo/Sol/Luna]|
| GET | [http://localhost:3000/maths/dividir/10/0]|
| GET | [http://localhost:3000/maths/dividir/10/2]|
| GET | [http://localhost:3000/maths/sumar/5/-8]|
| GET | [http://localhost:3000/maths/sumar/5/7]|
| GET | [http://localhost:3000/maths/autorizar?numero=3]|
| GET | [http://localhost:3000/maths/autorizar?numero=2]|
| GET | [http://localhost:3000/list/lista-de-compras?p1=fideos&p2=papas&p3=mayonesa&p4=queso&p5=jamon]|
| POST | [http://localhost:3000/api/crear/]| 

