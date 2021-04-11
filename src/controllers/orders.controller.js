const Order = require('../models/order.model');
const User = require('../models/user.model');

exports.create = (req, res) => {
  const order = new Order({
    total: req.body.total,
    user: req.body.user,
    products: req.body.products,
    status: req.body.status,
  });
  order
    .save()
    .then((data) => {
        User.findOneAndUpdate(req.body.user, {orders:data._id})
        .then(() => {
            res.send({
                data:data
            })
            .catch((err) => res.send(err));
        });
      res.send({
        order: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: 500,
        message: err.message || 'some error occured while creating user',
      });
    });
};

exports.getOrders = (req, res) => {
  Order.find()
    .populate('user')
    .populate('products')
    .then((data) => {
      res.send({
        data: data,
      });
    })
    .catch((err) => res.send(err));
};

exports.getOrder = (req, res) => {
  Order.findById(req.params.id)
    .populate('user')
    .populate('products')
    .then((data) => {
      res.send({
        data: data,
      });
    })
    .catch((err) => res.send(err));
};
