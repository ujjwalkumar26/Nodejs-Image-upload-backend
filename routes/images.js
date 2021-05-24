var express = require('express');
var router = express.Router();
var fs = require('fs')
const userModel = require("../usermodel");
const imageModel = require("../imgmodel");
var auth = false;
router.post('/',(req,res)=>{
 console.log(req.body.name)
 console.log(req.body.password)
 console.log(req.files)
 
  userModel.exists({ name: req.body.name, 
                    password: req.body.password}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      if(result==true){
        auth=true;
        if(req.files.img.size/1024>500){
          res.send({error:"File should be less than 500KB"})
        }
        else{
            console.log(req.files)
            const image = new imageModel({
              name: req.body.name,
              password: req.body.password,
              img:
              {
                  data: req.files.img.data,
                  contentType: req.files.img. mimetype
              } 
            });
            try {
                  image.save(); res.send({sent: true});
                } 
                catch (error) {
                res.status(500).send({error: error});
                }
        }
      }
      else {
            res.send({error: "Aunthentification failed"});
      }
    }
  });
})
module.exports = router;
