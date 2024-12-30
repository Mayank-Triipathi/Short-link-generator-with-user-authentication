const mapuser = new Map();

const setuser = (id,user)=>{
    return mapuser.set(id,user);
};

const getuser = (id) =>{
    return mapuser.get(id);
};

module.exports = {setuser,getuser};