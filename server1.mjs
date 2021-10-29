import express from "express"
const app=express()
const port=process.env.PORT || 4000
app.get("/",function(req,res){

    res.send("Hello World")
})

app.get("profile",function(req,res){

    res.send("Here is my profile")
})

app.listen(port)
