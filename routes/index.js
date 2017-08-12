var express = require('express');
var router = express.Router();
var path = require('path');
const db = require("../db/db");
var crud = require("../db/crud");
/* GET home page. */
router.get('/', function(req, res, next) {
  
      res.sendFile("index");
});

router.post('/log',function(req,res){
  
    var data = req.body;
    // console.log(data);
      crud.findProduct(data,req,res);
});
router.post('/signup',function(req,res){
  
    var data = req.body;
    console.log(data);
      crud.register(data,res);
});
router.get("/session",function(req,res){
  
  if(req.session.userid!=null){
    res.send(req.session);
  }
  else{
    res.send("invalid user");
  }
});

router.get("/logout",function(req,res){
  if(req.session.userid!=null){
    req.session.userid=null;
    res.send("logged out");
  }
  else{
    res.send("invalid user");
  }
})

module.exports = router;
