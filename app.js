const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouters = require('./routes/admin'); 
const shopRouters = require('./routes/shop');
const errorPageRouter = require('./routes/404');

app.use(bodyParser.urlencoded({extended : false}))

app.use('/admin',adminRouters);
app.use(shopRouters);
app.use(errorPageRouter);



app.listen(3000)