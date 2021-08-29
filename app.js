const express = require("express");
const ejs = require("ejs");
var path = require('path');


const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/",(req,res)=>{

    res.render("wishlist");
})

app.get("/recent",(req,res)=>{
    res.render("recentorders")
})

app.get("/bill",(req,res)=>{
    res.render("bill")
})

app.listen(5500,()=>{

    console.log("Server started in port 3000")
})