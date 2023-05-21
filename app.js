const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');
var item="";
app.get("/",function (req,res){
var day ="";
const dayNames = ["Sunday", "Monday", "Tuesday","wednesday","thursday","Friday","saturday","sunday"];
var today = new Date();

    day = today.getDate() +" "+dayNames[today.getDay()] + " "+today.getMonth();
    res.render("list",{Kindofday: day,newlistitem : item})



});
app.post("/",function(req,res){
    var item = req.body.newItem;
res.render("list",{newlistitem : item});
res.redirect("/");
});








app.listen(3000,function(){
    console.log("The port is back on track");
})
