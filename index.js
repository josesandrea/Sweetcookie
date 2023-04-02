const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


const clientes = []

class Cliente {
    contructor(id) {
    this.id = id
    }
 }
app.get("/welcome", (req, res) => {
    const id = `${Math.random()}`

    const cliente = new Cliente(id)
    clientes.push(cliente)
    
    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})


app.listen(8080, () => {
    console.log("servidor funcionando")
})
