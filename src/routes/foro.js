const express = require ("express");
const foroSchema = require("../models/foro");

const router = express.Router();

//crear post en foro 
router.post("/foro", (request, response)=>{
    const blog = foroSchema(request.body);
    blog.save().then((data)=>response.json(data)).catch((error)=>response.json({message: error}));
});

//obtener post en foro
router.get("/foro",(request,response)=>{
    foroSchema.find().then((data)=>response.json(data)).catch((error)=>response.json({message:error}));
});

//obtener un post en foro
router.get("/foro/:id",(request, response)=>{
    const {id}=request.params;
    foroSchema.findById(id).then((data)=>response.json(data)).catch((error)=>response.json({message:error}));
});

//actualizar post en foro
router.put("/foro/:id", (request, response)=>{
    const {id}=request.params;
    const {date, content, title, topic, comments} = request.body;
    foroSchema.updateOne({_id:id}, {$set:{date, content, title, topic, comments}}).then((data)=>response.json(dato)).catch((error)=>response.json({message:error}));
});

//eleminiar post en foro
router.delete("/foro/:id", (request, response)=>{
    const {id}=request.params;
    foroSchema.remove({_id: id}).then((data)=>response.json(data)).catch((error)=>response.json({message: error}));
});

module.exports = router;