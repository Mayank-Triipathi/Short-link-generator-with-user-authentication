const {getuser} = require("../service/auth");

const checkauth = (req,res,next) =>{
    const id = req.cookies.uid;
    if(!id){return res.redirect("/login")};
    const user = getuser(id);
    if(!user){return res.redirect("/login")};
    req.user = user;
    next();
}
const check = (req,res,next) =>{
    const id = req.cookies.uid;
    
    const user = getuser(id);
    
    req.user = user;
    next();
}

module.exports = {checkauth,check};