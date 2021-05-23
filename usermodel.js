var mongoose = require('mongoose');
 
var userSchema = new mongoose.Schema({
    name: String,
    password: String,
    img: Buffer
});

 
module.exports = new mongoose.model('Users', userSchema);