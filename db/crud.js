const schema = require("./schema");

var operations = {
    register:(itemObj,res)=>{
        var schemaObj = new schema({
            userid:itemObj.userid,
            password:itemObj.password,
        });
        schemaObj.save((err,content)=>{
            if(err){
                res.send("error adding product!!");
            }
            else{
                res.send("user added!!");
            }
        })
    },
    findProduct:(item,req,res)=>{
       
         var schemaObj = {
            userid:item.userid,
            password:item.password   
        };
        schema.find(schemaObj,(err,data)=>{
            
          if(data.length>0){
            req.session.userid = data[0].userid;
            res.send("found");
            console.log(data[0].userid);
          }
          else{
              res.send("not found");
          }
        })
    },
    findProductToDelete:(res)=>{
       schema.remove({markForDeletion:true},(err,data)=>{
            if(data){
                res.send(data);
            }
            else{
                res.send(err);
            }
       });
    },
    updateProduct:(prod,res)=>{
            var query={id: prod.id};
        schema.findOne(query,(err,data)=>{
            if(data){
                data.name = prod.name;
                data.desc = prod.desc;
                data.markForEdit = false;
                // data.markForDeletion = !data.markForDeletion;
                data.save((err,cont)=>{
                    res.send(cont);
                })
                
                
              }}); 
    },
    markforDelete:(id1,res)=>{
        var query={id: id1};
        schema.findOne(query,(err,data)=>{
            if(data){
                data.markForDeletion = !data.markForDeletion;
                data.save((err,cont)=>{
                    res.send(cont);
                })
                
                
              }}); 
      
    },
    markforEdit:(id1,res)=>{
        var query={id: id1};
        schema.findOne(query,(err,data)=>{
            if(data){
                data.markForEdit = !data.markForEdit;
                data.save((err,cont)=>{
                    res.send(cont);
                })
                
                
              }}); 
      
    },
       
  

}

module.exports= operations;