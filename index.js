const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const env = process.env.NODE_ENV || 'development';

const config = require(__dirname + '/server/config/config.json')[env];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

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