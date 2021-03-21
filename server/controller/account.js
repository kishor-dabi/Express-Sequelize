const Account = require('../models').Account;



    exports.getAll = (req, res) => {
        try {
            const account = Account.findAll({
                
            });

            console.log("-------------------all account")

            if(account){
                res.status(201).send(account);
            }
            else{
                re.status(404).send("User Not Found")
            }
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }

    }

    exports.create = (req, res) => {

        try {
            const account =  Account.create({
                name : req.body.name,
            }).then(data=>{
                                // console.log(data)
                                res.status(201).send(data);
                            });
            // res.status(201).send(account)
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
    }

    exports.update = (req, res) =>  {
        try{
            const data =  Post.find({
                account_id : req.params.id
            });

            if(data){
                const updatedData =  data.update({
                    name : req.body.name
                }).then(dataobj=>{
                                // console.log(data)
                                res.status(200).send(dataobj);
                            });

                // res.status(201).send(updatedData);
            }
            else{
                res.status(404).send("Account Not Found");
            }

        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }

    }
