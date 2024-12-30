const mongoose = require("mongoose");

const urlschema = new mongoose.Schema({
    Shortid:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    visithistory:[{timestamps:{type:Number}}],
    createdby:{type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    }
},{timestamps:true});

const urls = mongoose.model("urls",urlschema);

module.exports = {urls};