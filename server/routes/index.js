const userController = require('../controller').user;
const postController = require('../controller').post;
const accountController = require('../controller').account;
module.exports = (app) => {

    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Node Sequlize API v1"
        })
    })

    app.get('/api/users',userController.getAllUsers);

    app.post('/api/user/create',userController.create);

    app.put('/api/user/:userId',userController.update);

    app.get('/api/:userId/posts',postController.getAllPostsOfUser);

    app.post('/api/post/create',postController.createPost);

    app.put('/api/:postId',postController.update);

    app.post('/api/account/create',accountController.create);

    app.put('/api/account/:id',accountController.update);
    app.get('/api/accounts',accountController.getAll);

}