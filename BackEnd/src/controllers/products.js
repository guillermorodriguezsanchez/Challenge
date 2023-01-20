const { response } = require('express');
const Product = require('../models/product');
const {v4 : uuidv4} = require('uuid');

const addProduct = async (req, res = response) => {
    const {name, description, price, amount} = req.body;

    try {
        
        // Save the name of the event
        const _id = uuidv4();

        const existNameProduct = await Product.findOne({name: name});
        
        // Checking if the name of the event is already in the database
        if (existNameProduct) {
            return res.status(400).json({
                ok: false,
                msg: 'Name of this product exists'
            });
        }
        
     

        // If the event is not exists yet.
        // A new event is created 
        const product = new Product({ _id, name, description, price, amount});

        // Save it to the database
        await product.save();

        // Return a json with the id of the event
        res.json({
            ok: true,
            msg: 'addProduct',
            product
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            msg: 'Error trying to add a Product.'
        });
    }
}

const getProducts = async (req, res = response) => {

    const [products] = await Promise.all([
        Product.find()
    ])

    res.json({
        ok:true,
        products
    })

}

const deleteProduct = async (req, res = response) => {

    const _id = req.params;
    try {

        const productD = await Product.findOneAndRemove({_id: _id});

        res.json({
            ok:true,
            msg: "Product eliminated",
            productD
        })

        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok:false,
            msg: "There is a problem with the delete"
        })
    }
    
}

const getProductOne = async (req, res = response) => {

    const _id = req.params;

    try {
        
        const productGet = await Product.findOne(_id);

        res.json({
            ok:true,
            msg : "Product finded",
            productGet
        })

    } catch (error) {
        console.log(error);

        return res.status(400).json({
            ok:false,
            msg:"THere is a problem with the getOne"
        })

    }

}

const updateProduct = async (req, res = response) => {

    const {date ,...object} = req.body;
    const _id = req.params._id;

    try {

        const productU = await Product.findOneAndUpdate(
            _id, object, {new: true}
        )

        res.json({
            ok:true,
            msg: "Product updated",
            productU
        })
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            msg: 'Usert could not updated'
        });
    }

}


module.exports = {addProduct, getProductOne, getProducts, deleteProduct, updateProduct};