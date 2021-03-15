const Product = require('../models/product.model');
const Category = require('../models/category.model');

exports.create = (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    category: req.body.category 

  });

  product
    .save()
    .then((data) => {
      Category.findByIdAndUpdate(req.body.category, {products: data._id}).then(() => {
        res
          .send({
            data: data,
          })
          .catch((err) => res.send(err));
      });
      res.send({
        product: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: 500,
        message: err.message || 'some error occured while creating Product',
      });
    });
};

exports.getProduct = (req, res) => {
  Product.findById(req.params.id)
    .populate('category')
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Product with id ${req.params.id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

exports.getProducts = (req, res) => {
  Product.find()
    .populate('category')
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Product with id ${req.params.id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

