const express = require("express");
const router = express.Router();
const {urls} = require("../models/urls")

router.get("/login",(req,res)=>{
    return res.render("login");
})
router.get("/signup",(req,res)=>{
    return res.render("signup");
})
router.get("/",async (req,res)=>{
    console.log(req.user);
    if(!req.user){return res.redirect("/login")};
    const sessionid = req.user._id;
    console.log(sessionid);
    if(!sessionid){return res.redirect("/login")}
    const url = await urls.find({createdby:sessionid});

    return res.render("home",{urlls:url});
})
module.exports = {router};
