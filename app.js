const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : false}))

app.use('/add-product',(req,res,next) =>{
console.log("this is middlware call");
res.send("<form action='/product' method='post'><input type='text' name='title'><button type='submit'>send</button></input></form>")
})

app.use('/product',(req,res,next) =>{
  console.log(req);
  res.redirect('/')
})

app.use('/',(req,res,next) =>{
  res.send('<h1>it is home page</h1>')
})

  app.listen(3000)