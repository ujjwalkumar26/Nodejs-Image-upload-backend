var mongoose = require('mongoose');
 
var imageSchema = new mongoose.Schema({
    name: String,
    password: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

 
module.exports = new mongoose.model('Images', imageSchema);