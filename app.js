// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// // const expressHbs = require('express-handlebars');

// const app = express();

// // app.engine('handlebars',expressHbs.engine());
// app.set('view engine', 'pug');
// app.set('views', 'views');

// const adminRoute = require('./routes/admin'); 
// const shopRouters = require('./routes/shop');
// const errorPageRouter = require('./routes/404');

// app.use(express.static(path.join(__dirname,'public')))
// app.use(bodyParser.urlencoded({extended : false}))

// app.use('/admin',adminRoute);
// app.use(shopRouters);
// app.use(errorPageRouter);



// app.listen(3000)

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.getPageNotFound);

app.listen(3000);
