const User = require('../models').User;
const Account = require('../models').Account;
const bcrypt = require('bcrypt');
const saltRounds = 10;

// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
// });


// Retrieve all user from the database.
exports.getAllUsers = (req, res) => {
    try {

            const userCollection =  User.findAll({
                include: "accounts"
            }).then(data=>{
                                // console.log(data)
                                res.status(200).send(data);
                            });
            // console.log(userCollection)
            // return res.status(201).send(userCollection ?  userCollection : []);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }
  };


// Retrieve all user from the database.
exports.getUserById = (req, res) => {
    try {

            const userCollection =  User.find({
                user_id : req.params.id
            }).then(data=>{
                                // console.log(data)
                                res.status(200).send(data);
                            });
            // console.log(userCollection)
            // return res.status(201).send(userCollection ?  userCollection : []);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }
  };

exports.create = (req, res) =>{
    try {
            let body = req.body;
            User.find({
                  where: {
                    email : req.body.email
                }
            }).then(data=>{
                console.log(JSON.stringify(data))
                if (data) {
                        res.status(500).send({message:'User already exist with this email'});
                } else {
                    bcrypt.hash(req.body.password, saltRounds, function(err, hash)  {
                    // Store hash in your password DB.
                    if (!err) {
                         console.log(hash)
                        body.password = hash;

                        const userCollection =  User
                            .create( 
                                body
                            ).then(data=>{
                                // console.log(data)
                                res.status(201).send(data);
                            });
                        
                    }else{
                        res.status(500).send(err);
                    }
                   

                }); 
                }
            });
           
             // bcrypt.genSalt(saltRounds, function(err, salt) {

                        
            // });
            
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
           
}


exports.update = (req, res) =>{
        try{
            const userCollection =  User.find({
                id : req.params.userId
            });

            if(userCollection){

                const updatedUser =  User.update({
                    id : req.body.email
                }).then(data=>{
                                // console.log(data)
                                 res.status(200).send(data);
                            });

                // res.status(201).send(updatedUser)

            }
            else{

                res.status(404).send("User Not Found");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
}



function createUser(req, res,password, ) {
   bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
     let body = req.body;
     console.log(err, "======", hash)
        if(err){
            return {
                message:
                  err.message || "Some error occurred while save password."
              };
        }else{
            body.password = hash;
             const userCollection = User
            .create( 
                body
            );
            console.log(userCollection , "-------------11")
             // console.log(response ," -------------22")
               

                return  userCollection; 
            
        }
    });
}