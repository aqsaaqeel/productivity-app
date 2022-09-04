const mongoose = require('mongoose');
Schema = mongoose.Schema;

const TodoSchema = new mongoose.Schema({
 
    
        UserId:String,
        Title: Array,
        Description: String,
        Date:Date,
       
});

module.exports = mongoose.model('Todo', TodoSchema);
