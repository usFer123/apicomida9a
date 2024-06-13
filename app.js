const express = require("express");
const morgan = require("morgan");
const app = express()
const port = 3500
const comidaRouter = require('./routes/comidaRouter')


/*app.get("/", (req, res) =>{
    res.json({mensaje:"Aplicacion Funcionando Correctamente"})
})*/


app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use(morgan('dev'))
app.use('/API', comidaRouter)

app.use((req, res) => {
    res.status(404).json({message:'Ruta no encontrada'});
})

//Conectar con el servidor
app.listen(port, ()=> {
    console.log(`Aplicacion corriendo en el puerto ${port}`)
})

