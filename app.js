const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const usersRouter = require ("./routes/users")
const mathsRouter = require ("./routes/maths")
const listRouter = require ('./routes/list')
const apiRouter = require ('./routes/api')

app.use(express.json());

app.use("/users", usersRouter)
app.use("/maths", mathsRouter)
app.use("/list", listRouter)
app.use("/api", apiRouter)


app.get('/', (req, res) => {
  res.send('<h1>Welcome! Backend Tarea 2</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

