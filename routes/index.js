var express = require('express');
var router = express.Router();
var path = require('path');
const db = require("../db/db");
/* GET home page. */
router.get('/', function(req, res, next) {
  
      res.sendFile("index");
});

router.post('/log',function(req,res){
  
    var data = req.body;
    console.log(db.length);
    for(var i= 0 ; i<db.length;i++){
       if(data.userid == db[i].userid && data.password == db[i].password){
      res.send("welcome");
      console.log("hey");
      req.session.user = db[i];
      
      break;
    }
    else{
      res.send("user not found");
    }
    }
   
});
router.get("/session",function(req,res){
  
  if(req.session.user!=null){
    res.send("welcome");
  }
  else{
    res.send("invalid user");
  }
});

module.exports = router;
