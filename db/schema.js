const mongoose = require("./connection");

const CRUD = mongoose.Schema({
    
    userid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
});

const crudOp = mongoose.model("users",CRUD);

module.exports = crudOp;