const express = require('express');
const router = express.Router();
const Product = require('../models/ProductEntity');
const mongoose = require('mongoose');
const multer = require('multer');
 
router.get('/', (req, res, next) => {   // this code for fetch the all data in mongodb.
    Product.find()
        .select("name price_id")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                Products: docs.map(doc => {
                    return {
                        name: doc.name,
                        price: doc.price,
                        _id: doc.id,

                        request: {
                            type: 'GET',
                            url: 'http://localhost:2000/Products/' + doc._id
                        }
                    }
                }
                )
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

//**************************************************************************************************************
// this code for fetch the  data at perticular id in mongodb.


router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id).select('name price _id')
        .exec()
        .then(doc => {

            if (doc) {
                res.status(200).json({
                    product: doc,

                    request: {
                        type: 'GET',
                        url: 'http://localhost:2000/Products/'
                    }

                });
            }
            else {
                res.status(200).json({ message: "No valid entry for provide yhs entry" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

//************************************************************************************************************* */
// this code for delete data at perticular id in mongodb.
router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id })
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json({
                message: 'product deleted',

                request: {
                    type: 'POST',
                    url: 'http://localhost:2000/Products',
                    body: { name: 'String', price: 'String' }
                }

            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

//*********************************************************************************************************
//this code for Update data at perticular id in mongodb.


router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;

    const updateOps = {};

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Product.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json({
                message: "Product Updatd",
                request: {
                    type: 'GET',
                    url: 'http://localhost:2000/Products/' + id

                }

            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

//******************************************************************************************************
//this code for insert data at perticular id in mongodb

router.post('/', (req, res, next) => {
console.log(req.file);
    const product = new Product({
        _id: new mongoose.Types.ObjectId(), //automatic & unique ID
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result => {
        console.log(result);
        res.status(200).json({
            message: 'created product sicssesfuly',
            createdProduct: {
                name: result.name,
                price: result.price,
                _id: result.id,
                request: {
                    type: 'GET',
                    url: 'http://localhost:2000/Products/' + result._id
                }
            }
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;