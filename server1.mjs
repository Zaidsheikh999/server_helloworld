import express from "express"
const app=express()
const port=process.env.PORT || 4000
app.get("/",function(req,res){

    res.send("Hello World")
})

app.listen(port)
