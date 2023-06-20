import express, { request } from "express";
import cors from "cors";

// Inicializamos los endpoints
const app = express();
app.use(express.json());

const PORT = 3000;

app.use(cors());

app.get("/ping", (req, res):void => {
    console.log("alguien ha dado ping!!!");
    res.setHeader("Content-Type", "application/json");
    res.send("pong");
})

app.get("/hola/:nombre/:apellido", (req, res):void => {
    res.setHeader("Content-Type", "application/json");
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;
    console.log("alguien ha ingresado sus nombres!!!");
    res.send({nombre: nombre, apellido: apellido});
})

app.listen(PORT, ():void => {
    console.log(`server running in port: ${PORT}`);
})