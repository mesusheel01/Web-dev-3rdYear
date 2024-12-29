import express from "express";

const app = express();
const port = 3000;
function logger(req,res,next){
  console.log("Request method: ",req.method );
  console.log("Request url: ",req.url );
  next();//the next method is very important to make it as middleware
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
