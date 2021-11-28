const express = require ("express");
const blogSchema = require("../models/Blog");

const router = express.Router();

//crear post en blog 
router.post("/blog", (request, response)=>{
    const blog = blogSchema(request.body);
    blog.save().then((data)=>response.json(data)).catch((error)=>response.json({message: error}));
});

//obtener post en blog
router.get("/blog",(request,response)=>{
    blogSchema.find().then((data)=>response.json(data)).catch((error)=>response.json({message:error}));
});

//obtener un post en blog
router.get("/blog/:id",(request, response)=>{
    const {id}=request.params;
    blogSchema.findById(id).then((data)=>response.json(data)).catch((error)=>response.json({message:error}));
});

//obtener un post por url
router.get("/blog/url/:url", (request, response)=>{
    blogSchema.find({url: request.params.url}).then((data)=> response.json(data)).catch((error) => response.json({message: error}));
})

//actualizar post en blog
router.put("/blog/:id", (request, response)=>{
    const {id}=request.params;
    const {date, content, title, category} = request.body;
    blogSchema.updateOne({_id:id}, {$set:{date, content, title, category}}).then((data)=>response.json(dato)).catch((error)=>response.json({message:error}));
});

//eleminiar post en blog
router.delete("/blog/:id", (request, response)=>{
    const {id}=request.params;
    blogSchema.remove({_id: id}).then((data)=>response.json(data)).catch((error)=>response.json({message: error}));
});

module.exports = router;