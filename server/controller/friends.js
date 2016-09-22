//same as module.exports={a:function(){},b:function()};
var mongoose = require('mongoose');
var friendModel = mongoose.model('Friends');

console.log("Controller loaded");
function FriendsController(){
  this.index = function(req,res){
    friendModel.find({},function(err,friends){
      if(err){ console.log("ERROR: "+err); }
      else{
        res.json({status:true,data:friends}) }
    })
  }
  this.show = function(req,res){

  }
  this.create =  function(req,res){
    console.log('entered server create');
    //var newfriend = new friendModel({fname:req.body.fname,lname:req.body.lname});
    friendModel.create({fname:req.body.fname,lname:req.body.lname},function(err){
      if(err){  console.log("Error: "+ err ); }
      else{console.log("created");}
       })
    // newfriend.save(function(err){
    //   if(err){  console.log("Error: "+ err ); }
    // })
  }
  this.update =  function(req,res){

  }
  this.delete = function(req,res){
    console.log("reached delete")
  }
}
module.exports = new FriendsController();
