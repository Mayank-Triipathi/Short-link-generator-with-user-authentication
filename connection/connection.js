const mongoose = require("mongoose");

const connectomdb = (url) =>{
    return mongoose.connect(url);
};

module.exports = {connectomdb};