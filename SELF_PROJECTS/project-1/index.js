const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs")

const app = express();
const port = 3000;


app.use(express.urlencoded({extended:false}));//middleware
//users as document
app.get("/users",(req,res)=>{
    // <ul>
    // <li>Susheel rai</li>
    const html = `<ul>
    ${users.map((user) =>`<li>${user.first_name}`).join("")}
    </ul>`;
    res.send(html);
})
//REST API
app.get("/api/users",(req,res)=>{
    return res.json(users);
})

//type server/api/users/id, where id = 1,2,..ids
app.route("/api/users/:id").get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id)
    return res.json(user);
}).patch((req,res)=>{
    //edit user with id
    const body = req.body;
    const id = Number(req.params.id);
    const user = users.find(user=> user.id === id);
    const updatedUser = {...user,...body};
    updatedUser.id = id;
    users[id-1] = updatedUser;
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
        
        return res.json({status:"success", updatedUser});
    })
})
  .delete((req,res)=>{
    // delete route
    const id = Number(req.params.id);
    const user = users.find(user=> user.id === id);
    const delUser = users.splice(user,1)[0];
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",delUser});
    })
})

app.post("/api/users", (req,res)=>{
    // todo : cresate new user
    const body = req.body;
    console.log(body);
    users.push({ ...body, id: users.length+1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
        return res.json({status: "success", id: users.length})
    })
});


app.listen(port, ()=> console.log( `server is running at port ${port}`));