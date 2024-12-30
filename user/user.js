const {v4:uuidv4} = require("uuid");
const {setuser} = require("../service/auth")
const {users} = require("../models/users");
const express = require("express");
const userouter = express.Router();

userouter.post("/signup",async(req,res)=>{
    const {name,email,password} = req.body;
    await users.create({
        name,
        email,
        password,
    });
    return res.render("home");
})
userouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const user = await users.findOne({email,password});
    
    if(!user){return res.redirect("/login")};
    const sessionid = uuidv4();
    setuser(sessionid,user);
    res.cookie("uid",sessionid);
    return res.redirect("/");
})

module.exports = {userouter};