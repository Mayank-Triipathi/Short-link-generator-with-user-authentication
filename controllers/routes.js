const {urls} = require("../models/urls")
const shortid = require("shortid")
const posturl = async (req,res) =>{
    
    const url = await urls.create({
        Shortid:shortid(),
        url:req.body.url,
        visithistory:[],
        createdby:req.user._id,
    })

    res.render("home",{url});
};

const geturl = async (req,res) =>{
    const Shortid = req.params.id;
    const urll = await urls.findOneAndUpdate({Shortid},{$push:{visithistory:{timestamps:Date.now()}}})
    console.log(urll);
    res.redirect(urll.url);
}

module.exports = {posturl,geturl};
