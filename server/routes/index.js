const userController = require('../controller/user.js');
const postController = require('../controller').post;
const accountController = require('../controller/account.js');
const loginController = require('../controller/login.js');
module.exports = (app) => {

    var router = require("express").Router();
  

    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Node Sequlize API v1"
        })
    })

    router.get('/api/users',userController.getAllUsers);

    router.post('/api/user/create',userController.create);

    router.put('/api/user/:userId',userController.update);
    router.get('/api/user/:id',userController.getUserById);

    app.get('/api/:userId/posts',postController.getAllPostsOfUser);

    app.post('/api/post/create',postController.createPost);

    app.put('/api/:postId',postController.update);

    router.post('/api/account/create',accountController.create);

    router.put('/api/account/:id',accountController.update);
    router.get('/api/accounts',accountController.getAll);
    router.post('/api/login',loginController.login);

    // router.post('/api/signup', )

 app.use("/", router);

}