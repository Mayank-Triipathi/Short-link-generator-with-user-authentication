const express = require("express");
const urlrouter = express.Router();
const{posturl,geturl} = require("./routes");
urlrouter.route("/post").post(posturl);
urlrouter.route("/get/:id").get(geturl);

module.exports = {urlrouter}
