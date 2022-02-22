const mongoose = require('mongoose');

export default Events = mongoose.Schema({
    name:{type:String}, 
    description: {type: String},
    date: {type:String},
    startTime: {type: String},
    endTime:{type: String},
    username:{type: String}, 
    search:[]


})