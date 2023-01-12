const Users = require('../models/users');
const bcrypt = require('bcrypt');

exports.postAddUsers= (req,res,next)=>{
    let password = req.body.password;
    bcrypt.hash(password, 10).then( async (hash)=> {
        await Users.create({
            name:req.body.name,
            email:req.body.email,
            password: hash
         })
         .then(result=> res.json("User added successfully"))
         .catch(err => {

             if(err.errors[0].validatorKey=="not_unique"){
                 res.status(400).send("already_exist");
             }
             else {
                 res.status(400).send(err);
             }
         });
    });
}