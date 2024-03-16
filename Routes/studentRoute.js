const express = require('express');
const studentModel = require('../Model/studentModel');
const router = express.Router();


router.use(express.json());

router.get('/',async(req,res)=>{
   try{
    const data = await studentModel.find()
    res.send(data);
   }catch(error){
    console.log(error)
   }
})

router.post('/add',async(req,res)=>{
    try{

        var item = req.body;
        await studentModel(item).save()
        res.send("posted");
    }catch (error){
        console.log(error)

    }
})

router.put('/edit/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const item = req.body;
        await studentModel.findByIdAndUpdate(id,item);
        res.send("date updated")
    }catch (error){
        console.log(error)
        
}});


router.delete('/remove/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const item = req.body;
        await studentModel.findByIdAndDelete(id,item);
        res.send("date remove")
    }catch (error){
        console.log(error)
        
}});
module.exports = router;