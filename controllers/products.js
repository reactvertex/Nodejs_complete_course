const Product = require('../models/products');

exports.getAddProduct = (req,res,next) =>{
    // console.log(res,"this is middlware call");
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
}
exports.postAddProduct = (req,res,next) =>{
    // console.log(req.body,'fffff');
    const product = new Product(req.body.title);
     product.save()
    // console.log(res.body,'reee');
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};
