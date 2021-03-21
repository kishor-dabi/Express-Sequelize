const User = require('../models').User;

const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

const env = process.env.NODE_ENV || 'development';

const config = require(__dirname + '/../config/config.json')[env];


// Retrieve all user from the database.
exports.login = (req, res) => {
    try {



            const userCollection =  User.find({
                where: { email: req.body.email },
                include: "accounts"
            }).then(data=>{
               
                bcrypt.compare(req.body.password, data.password).then(function(result) {
                    // result == true
                    if (result) {
                        // let user_data = JSON.parse(JSON.stringify(data))
                        let user_data = {
                            email:data.email,
                            first_name:data.first_name,
                            last_name:data.last_name,
                            gender:data.gender,
                            accounts:data.accounts
                        }
                        delete user_data.password

                        let token = jwt.sign({
                            exp: Math.floor(Date.now() / 1000) + (60 * 60),
                            data: user_data
                            }, config.jwt);
                           
                        // var token = jwt.sign(JSON.stringify(user_data), config.jwt, { algorithm: 'RS256'}).catch(err1=>console.log(err1));
                        // jwt.sign(user_data, config.jwt, { algorithm: 'RS256' }, function(err, token) {
                        //     if (!err) {
                                console.log(token, "-----------token")
                                res.status(200).send({token:token, user_data:user_data});
                            // }else{
                                // console.log(err, "------------")
                            // }
                        // });
                    }else{
                        res.status(400).send({message:"Invalid email or password"});
                    }
                });
                
                // res.status(200).send(data);
            });
            // console.log(userCollection)
            // return res.status(201).send(userCollection ?  userCollection : []);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }
  };