const express = require('express');
const router = express.Router();

const Order = require('../models/OrderEntity');
const mongoose = require('mongoose');

const Product = require('../models/ProductEntity');

router.get('/', (req, res, next) => {  //this code for fetch all data in mongodb

    Order.find().select('product quantity _id').populate('product', 'name').
        exec().
        then(docs => {
            res.status(200).json(
                {
                    count: docs.length,
                    Orders: docs.map(doc => {
                        return {
                            _id: doc._id,
                            product: doc.product,
                            quantity: doc.quantity,
                            request: {
                                type: 'GET',
                                url: 'http://localhost:2000/Orders/' + doc._id
                            }
                        }
                    })
                });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
});
//************************************************************************************************************* *
//this code for fetch data at perticular id in mongodb
router.get('/:orderId', (req, res, next) => {
    Order.findById(req.params.orderId).populate('product')
        .exec()
        .then(order => {
            if (!order) {
                return res.status(404).json({
                    message: 'order not found'
                });
            }
            res.status(200).json({
                order: order,
                request: {
                    type: 'GET',
                    url: 'http://localhost:2000/orders'
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
});

//************************************************************************************************************* *
//this code for insert data in mongodb.

router.post('/', (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (!product) {
                console.log('product not found');
                return res.status(404).json({
                    message: "product not found"
                });
            }
            const order = new Order({
                _id: new mongoose.Types.ObjectId(), //automatic & unique ID
                quantity: req.body.quantity,
                product: req.body.productId

            });
            return order.save();
        }
        )
        .then(
            result => {
                console.log(result);
                res.status(200).json({
                    message: 'Order Stored',
                    createdOrder: {
                        _id: result._id,
                        product: result.product,
                        quantity: result.quantity
                    },
                    request: {
                        type: 'GET',
                        url: 'http://localhost:2000/Orders/' + result._id
                    }
                });
            })
        .catch(err => {
            res.status(500).json({
                message: 'product not found',
                error: err
            });
        });
});

router.put('/:id', (req, res, next) => {
    var id = req.params.id;
    res.status(200).json({
        message: 'orders PUT method invoked',
        id: id
    });
});

//************************************************************************************************************* *
//this code for delete data at perticular id in mongodb
router.delete('/:orderId', (req, res, next) => {
    Order.remove({ _id: req.params.orderId })
        .exec()
        .then(result => {
            res.status(200).json(
                {
                    message: 'orderdeleted',
                    request: {
                        type: "POST",
                        url: "http://localhost:2000/orders",
                        body: { productId: "ID", quantity: "Number" }
                    }
                }
            );
        })
        .catch(err => {

            res.status(500).json({

                message: 'product not found',
                error: err
            });
        });
});
module.exports = router;