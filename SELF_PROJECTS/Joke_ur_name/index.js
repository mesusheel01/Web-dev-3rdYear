import express from "express"
import axios from "axios";

const app = express()
const port =  3000;

app.use(express.static("public"));

//load the index.js page on /
app.get("/",(req,res)=>{
    app.render("index.ejs");
    const name = req.body.name;
})


app.get("/",async(req,res)=>{
    try{
        const result = await axios.get("https://v2.jokeapi.dev/")
        app.render("index.ejs", {
            joke: res.data
        })
    }
})