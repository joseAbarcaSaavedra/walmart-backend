import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  id: Number,
  brand: { type: String, required: true },
  description: { type: String, default: '' },
  image: {
    type: String,
    default: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
  },
  price: { type: Number, default: 0 },
})

export default mongoose.model('product', ProductSchema)
