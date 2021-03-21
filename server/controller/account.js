const Account = require('../models').Account;

module.exports = {

    async getAll(req,res) {
        try {
            const account = await Account.find({
                
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

    },

    async create(req,res) {

        try {
            const account = await Account.create({
                name : req.body.name,
            });
            res.status(201).send(account)
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
    },

    async update(req,res) {
        try{
            const data = await Post.find({
                account_id : req.params.id
            });

            if(data){
                const updatedData = await data.update({
                    name : req.body.name
                })

                res.status(201).send(updatedData);
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
}