const express = require("express")
const app = express()
const port = 3500


app.get("/", (req, res) =>{
    res.json({mensaje:"Aplicacion Funcionando Correctamente"})
})

//Conectar con el servidor
app.listen(port, ()=> {
    console.log(`Aplicacion corriendo en el puerto ${port}`)
})