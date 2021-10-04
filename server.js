const express = require('express');
const fileupload = require('express-fileupload');

const app = express();
app.use(fileupload());

app.post('/upload',(req,res)=>{
    var file = req.files.photo;
    // console.log(file.name)
    file.mv("./uploads/"+file.name,(err1,result)=>{
        if(err1){
            res.status(500).send({
                success:false,
                message:"file not uploaded"
            })
        }

        res.status(201).send({
            success:true,
            message:'file uploaded',
            path:`./uploads/${file.name}`
        });
    })
});
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("api is listening on port 3000");
})