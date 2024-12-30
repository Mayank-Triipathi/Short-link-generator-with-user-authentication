const {connectomdb} = require("./connection/connection");
connectomdb("mongodb://127.0.0.1:27017/urldb");
const cookieparser = require("cookie-parser");
const path = require("path");
const express = require("express");
const {router} = require("./staticrouter/staticrouter")
const {urlrouter} = require("./controllers/router");
const {userouter} = require("./user/user");
const {checkauth,check} = require("./middlewares/auth")
const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs"); 
app.set("views",path.resolve("./views"));

app.use("/url",checkauth,urlrouter);
app.use("/user",userouter);
app.use("/",check,router)

app.listen(8000,()=>{console.log("connected")});