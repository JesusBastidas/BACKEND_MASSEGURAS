const express = require("express");
const mongoose = require("mongoose");
require ("dotenv").config();
const userRoutes = require("./routes/usuario");
const blogRoutes = require("./routes/Blog");
const foroRoutes = require("./routes/foro");

const app = express();
const port = process.env.PORT || 9000;  

//middleware
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", blogRoutes);
app.use("/api", foroRoutes);

// rutas
app.get("/", (request, response)=> {
    response.send("bienvenido a masseguras");
});

// conexion con mongodb
mongoose.connect(process.env.mongodb_uri).then(()=>console.log("Conectado a la base de datos")).catch((error)=>console.error(error));


app.listen(port, () => console .log ("server listening on port", port));