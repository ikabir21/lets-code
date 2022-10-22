const express=require("express");
const ejs =require("ejs");


const app=express();
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html");
})

app.post("/",function(req,res){
   let level=req.body.level;
   res.sendFile(__dirname+"/index"+level+".html")
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port,function(req,res){
    console.log("server is running...");
})