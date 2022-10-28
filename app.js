const express=require('express');
const app=express();
const  requireConnection =()=>{
    return(req,res,next)=>{
        if(req.headers['connection'] !== 'keep-alive'){
            res.status(400).send('Connection must please kept keep-alive')
        }
        else{
            next()
        }
    }
}
app.post('/',requireConnection(),(req,res,next)=>{
    res.send("Connection done")
});
app.listen(3000,()=>{
    console.log("server listening");
})