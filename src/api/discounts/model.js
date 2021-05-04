import mongoose from 'mongoose'

const DiscountsSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  threshold: { type: Number, required: true },
  discount: { type: Number, default: 0 },
})

export default mongoose.model('discount', DiscountsSchema)
