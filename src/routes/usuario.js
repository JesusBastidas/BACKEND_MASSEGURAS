const express = require ("express");
const userSchema = require("../models/usuario");

const router = express.Router();

//crear usuario
router.post("/usuario", (request, response)=>{
    const user = userSchema(request.body);
    user.save().then((data)=>response.json(data)).catch((error)=>response.json({message: error}));
});

//obtener todos los usuarios
router.get("/usuario",(request,response)=>{
    userSchema.find().then((data)=>response.json(data)).catch((error)=>response.json({message:error}));
});

//obtener un usuario
router.get("/usuario/:id",(request, response)=>{
    const {id}=request.params;
    userSchema.findById(id).then((data)=>response.json(data)).catch((error)=>response.json({message:error}));
});

//actualizar usuario
router.put("/usuario/:id", (request, response)=>{
    const {id}=request.params;
    const {name, mail, password, message, contactemer} = request.body;
    userSchema.updateOne({_id:id}, {$set:{name, mail, password, message, contactemer}}).then((data)=>response.json(dato)).catch((error)=>response.json({message:error}));
});

//eleminiar usuario
router.delete("/usuario/:id", (request, response)=>{
    const {id}=request.params;
    userSchema.remove({_id: id}).then((data)=>response.json(data)).catch((error)=>response.json({message: error}));
});

module.exports = router;