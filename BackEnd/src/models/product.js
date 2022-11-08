const { Schema, model } = require('mongoose');

// Creating the model of Event
const ProductSchema = Schema({
    _id:{
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    amount:{
        type: Number,
        require: true,
        default : 0
    },
    date:{
        type: Date,
        default: Date.now
    },
});

ProductSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('Product', ProductSchema);