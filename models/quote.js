const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

//changed year numbers to string because of dropdown in frontend says 2000-Present as a value

const quotesSchema = new mongoose.Schema({
  author: { type: String, required: true },
  quote: { type: String, required: true, maxlength: 1500 },
  source: { type: String, required: true },
  theme: { type: String, required: true },
  year: { type: String, required: true },
  isBook: { type: Boolean, required: true },
  comments: [commentSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Quote', quotesSchema)