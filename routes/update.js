var express = require('express');
var router = express.Router();
var fs = require('fs')
const userModel = require("../usermodel");
const imageModel = require("../imgmodel");
var auth = false;

router.put('/', function(req, res) {
  userModel.exists({ name: req.body.name, 
                     password: req.body.password}, 
                     function(err, result) {
                      if (err) {
                      res.send(err);
                      } 
                      else {
                            if(result==true){
                        //exits
                                    if(req.files.img.size/1024>500){
                                        res.send({error:"File should be less than 500KB"})
                                    }
                                    else{ 
                                        imageModel.updateOne({name: req.body.name,
                                        password: req.body.password},
                                        { img:
                                        {
                                            data: req.files.img.data,
                                            contentType: req.files.img. mimetype
                                        }  
                                        });
                                        res.send({status:"successfully updated"})
                                    }
                            }
                            else{
                            //doesnt exist
                            res.send({auth:"failed"})
                            }
                          }
  });
     //res.render('index', { title: 'Express' });
    
});

module.exports = router;
