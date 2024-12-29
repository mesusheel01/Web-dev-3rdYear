//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 4000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

var userAutherized = false;

function checkPass(req,res,next){
    const pass = req.body["password"];
    if (pass == "gg"){
        userAutherized = true;
    }
    next();
}
app.use(checkPass);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
    if(userAutherized){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port,(req,res)=>{
    console.log(`listening to port ${port}`);
})