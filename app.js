const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const cors = require('cors');

const sequelize  = require('./util/database');
const userRoutes = require('./routes/users');
const usersTable = require('./models/users');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(userRoutes);


sequelize.sync() 
.then(result=>{
    app.listen(3000);
})
.catch(err=>
    {console.log(err);
})