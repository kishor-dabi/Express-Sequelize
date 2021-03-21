const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const env = process.env.NODE_ENV || 'development';
var jwt = require('jsonwebtoken');

const config = require(__dirname + '/server/config/config.json')[env];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use((req, res, next) => {
  // console.log(req.originalUrl, req.path,req.url, req.headers.authorization)
  if (req.path == '/api/user/create' || req.path == '/api/user/login/') {
    
    next();  
  }else if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Header missing!' });
  }else{

    // var decoded = jwt.verify(token, 'shhhhh');
    let token = req.headers.authorization
    token = token ? token.split(" ") : [];

    if (token[1]) {
    	jwt.verify(token[1], config.jwt, function(err, decoded) {
		  console.log(decoded) // bar
		  if (decoded) {
    		next()

		  } else {
	    	return res.status(401).json({ message: 'Invalid token.' });

		  }
		});
    }else{
    	return res.status(403).json({ message: 'Unauthorized' });

    }

  }
})
require('./server/routes')(app);
const db = require("./server/models");

db.sequelize.sync().then(function(){
    // console.log("-------------------------");
  }
  );

db.sequelize.authenticate().then(() => {
        console.log('Connected to SQL database:', config.database);
    })
    .catch(err => {
        console.error('Unable to connect to SQL database:', config.database, err);
    });

// CORS
app.use(cors());

const PORT = 4000;
app.listen(PORT,() => {
    console.log(`Server is listening to port ${PORT}`)
})