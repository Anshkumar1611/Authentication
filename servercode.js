//servercode layout

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB").then(function(){
    console.log("Succesfully  connected to Database");
}).catch(function(err){
    console.log(err);
});

const itemsSchema = {
    name: String
  };
  
  const Item = mongoose.model("Item", itemsSchema);
  
  
  const item1 = new Item({
    name: "Welcome to your todolist!"
  });





app.listen(3000, function() {
    console.log("Server started on port 3000");
  });