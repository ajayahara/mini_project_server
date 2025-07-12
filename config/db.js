const mongoose=require('mongoose');
const { MONGO_URI } = require('./config');

const connection = mongoose.connect(MONGO_URI||"");

module.exports={
    connection
}