const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.send("Hello World!");
})
app.post("/add",(req,res)=>{
    const numm1=req.body.numm1;
    const numm2=req.body.numm2;
    if(isNaN(numm1)||isNaN(numm2)){
        return res.status(400).json({
            status:"failure",
            message:"both are must be numeric"
        });
        
    }else if(numm1===""||numm2===""){
        return res.status(400).json({
            status:"error",
            message:"invalid data type"
        });

    }
    else{
        const sum=0;
        return res.status(400).json({
            status:"success",
            message:"the addition of two given numbers",
            sum:numm1+numm2
        });
    }

});
app.post("/sub",(req,res)=>{
    const numm1=req.body.numm1;
    const numm2=req.body.numm2;
    if(isNaN(numm1)||isNaN(numm2)){
        return res.status(400).json({
            status:"failure",
            message:"both are must be numeric"
        });
        
    }else if(numm1===""||numm2===""){
        return res.status(400).json({
            status:"error",
            message:"invalid data type"
        });

    }
    else{
        const diff=0;
        return res.status(400).json({
            status:"success",
            message:"the differnce of two given numbers",
            diff:Math.abs(numm1-numm2)
        });
    }

});
app.post("/multiply",(req,res)=>{
    const numm1=req.body.numm1;
    const numm2=req.body.numm2;
    if(isNaN(numm1)||isNaN(numm2)){
        return res.status(400).json({
            status:"failure",
            message:"both are must be numeric"
        });
        
    }else if(numm1===""||numm2===""){
        return res.status(400).json({
            status:"error",
            message:"invalid data type"
        });

    }
    else{
        const multi=0;
        return res.status(400).json({
            status:"success",
            message:"the addition of two given numbers",
            sum:numm1*numm2
        });
    }

});
app.post("/devide",(req,res)=>{
    const numm1=req.body.numm1;
    const numm2=req.body.numm2;
    if(isNaN(numm1)||isNaN(numm2)){
        return res.status(400).json({
            status:"failure",
            message:"both are must be numeric"
        });
        
    }else if(numm1===""||numm2===""){
        return res.status(400).json({
            status:"error",
            message:"invalid data type"
        });

    }
    else if(numm2=0){
        return res.status(400).json({
            status:"error",
            message:"cannot devide by zero"
        })
    }
    else{
        const div=0;
        return res.status(400).json({
            status:"success",
            message:"the addition of two given numbers",
            div:numm1/numm2
        });
    }

});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;