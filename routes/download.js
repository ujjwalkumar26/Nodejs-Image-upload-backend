var express = require('express');
var router = express.Router();
const userModel = require("../usermodel");
const imageModel = require("../imgmodel");
var auth = false;

router.get('/:a/:b', function(req, res, next) {
  userModel.exists({ name: req.params.a, 
                     password: req.params.b}, 
                     function(err, result) {
                      if (err) {
                      res.send(err);
                      } 
                      else {
                            if(result==true){
                        //exits
                        auth=true;
                        imageModel.findOne({name: req.params.a,
                                            password: req.params.b}, 
                                            function (err, doc){
                                            res.render('image', { image: doc });
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
