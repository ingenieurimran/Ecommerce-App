const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter Product Name'],
  },
  description: {
    type: String,
    required: [true, 'Please enter Product Description'],
  },
  price: {
    type: Number,
    required: [8, 'Price connot exceed 8 characters'],
  },
  rating: {
    type: Number,
    default: true,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Please enter product Catehory'],
  },
  Stock: {
    type: String,
    required: [true, 'Please enter product Stock'],
    maxLength: [4, 'Stock connot exceed 4 characters'],
    default: 1,
  },
  nomOfReviews: {
    type: String,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user:{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Product', productSchema)
