const express = require('express')
const app = express()
const mongo = require('mongoose')
const uri = "mongodb+srv://thaiqt0002:thaiqt0002@cluster0.tjxojos.mongodb.net/test?retryWrites=true&w=majority"

mongo.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err) throw err
    console.log("Connected")
})

app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.get("/home", (req, res)=>{
    res.render("index")
})

app.post("/api/user", (req, res)=>{
    const SaveUser = new UserModel(req.body)
    SaveUser.save((error, savedUser)=>{
        if(error) throw error
        res.json(savedUser)
    })
})

app.listen(9000, ()=>{
    console.log("listening to port 9000")
})