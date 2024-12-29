import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
});

app.post("/register",(req,res)=>{
    res.sendStatus(201);
});
app.patch("/user/susheel",(req,res)=>{
    res.sendStatus(200);
});
app.delete("/user/susheel",(req,res)=>{
    res.send(200);
}); 
app.get("/about",(req,res)=>{
    res.send("<h1>About Me</h1>");
}); 
app.listen(port,() =>{
    console.log(`Server running on port ${port}`);
});