# Nodejs-Image-upload-backend

The routes for the rest api are:
* GET http<i></i>://localhost:3000/download/username/usernamepassword

          response: An html file with the given img file
          
* POST http<i></i>://localhost:3000/upload

          request:
               name: username
               password: usernamepassword
               img: imgfile          
               
* PUT http<i></i>://localhost:3000/update

          request:
               name: username
               password: usernamepassword
               img: new imgfile
               
* DELETE http<i></i>://localhost:3000/delete/username/usernamepassword

For user auth, I have created a user database manually. 

Stack used: Node.js, express, ejs
