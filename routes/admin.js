const express = require('express');

const router = express.Router();

// admin/add-product => GET
router.get('/add-product',(req,res,next) =>{
    console.log("this is middlware call");
    res.send("<form action='/admin/product' method='post'><input type='text' name='title'><button type='submit'>send</button></input></form>")
})

// admin/add-product => POST    
router.post('/add-product',(req,res,next) =>{
          res.redirect('/')
})


module.exports = router;