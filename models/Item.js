const mongoose=require('mongoose')

let itemSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    mrp:Number,
    discount:Number,
    shippingcharge:Number


})
module.exports = mongoose.model('Item',itemSchema)


