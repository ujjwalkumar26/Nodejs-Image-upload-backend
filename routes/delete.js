var express = require('express');
var router = express.Router();
const userModel = require("../usermodel");
const imageModel = require("../imgmodel");
var auth = false;

router.delete('/:a/:b', function(req, res, next) {
  userModel.exists({ name: req.params.a, 
                     password: req.params.b}, 
                     function(err, result) {
                      if (err) {
                      res.send(err);
                      } 
                      else {
                            if(result==true){
                        //exits
                        imageModel.findOneAndDelete({name: req.params.a,
                                                     password: req.params.b}, function (err) {
                                                     if(err) console.log(err);
                                                     else{
                                                       console.log("Successful deletion");
                                                       res.send({deletestatus: "successful"});
                                                      }
                        });
                            }
                            else{
                            //doesnt exist
                            res.send({auth:failed})
                            }
                          }
  });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
