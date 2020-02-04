const Quote = require('../models/quote')

function index(req, res) {
  Quote
    .find()
    .populate('user')
    .then(foundQuotes => res.status(200).json(foundQuotes))
    .catch(err => console.log(err))
}

function create(req, res) {
  req.body.user = req.currentUser
  Quote
    .create(req.body)
    .then(createdQuote => res.status(201).json(createdQuote))
    .catch(err => console.log(err))
}

function show(req, res) {
  Quote
    .findById(req.params.id)
    .populate('user')
    .then(quote => res.status(200).json(quote))
    .catch(err => console.log(err))
}

function update(req, res, next) {
  Quote
    .findById(req.params.id)
    .then(quote => {
      if (!quote) return res.status(404).json({ message: 'Not Found' })
      if (!quote.user.equals(req.currentUser._id)) {
        return res.status(401).json({ message: 'Unauthorized' })
      } else {
        Object.assign(quote, req.body)
        quote.save()
          .then(updatedQuote => res.status(202).json(updatedQuote))
      }
    })
    .catch(next)
}

function destroy(req, res) {
  Quote
    .findById(req.params.id)
    .then(quote => {
      if (!quote) return res.status(404).json({ message: 'Not Found' })
      if (!quote.user.equals(req.currentUser._id)) {
        return res.status(401).json({ message: 'Unauthorized' })
      } else {
        quote.remove()
        return res.sendStatus(204)
      }
    })
    .catch(err => res.json(err))
}

// api/quotes/:id/comments
// why does this need next?
// why is Quote uppercase and then lowercase?
function commentCreate(req, res, next) {
  req.body.user = req.currentUser
  Quote
    .findById(req.params.id)
    .then(quote => {
      if (!quote) return res.status(404).json({ message: 'Not Found' })
      quote.comments.push(req.body)
      return quote.save()
    })
    .then(quote => res.status(201).json(quote))
    .catch(next)
}

// api/quotes/:id/comments/:commentId
function commentDelete(req, res) {
  Quote
    .findById(req.params.id)
    .then(quote => {
      if (!quote) return res.status(404).json({ message: 'Not Found' })
      const comment = quote.comments.id(req.params.commentId)
      if (!comment.user.equals(req.currentUser._id)) {
        return res.status(401).json({ message: 'Unauthorized' })
      } else {
        comment.remove()
        return quote.save().then(() => res.sendStatus(204))
      }
    })
    .catch(err => res.json(err))
}

module.exports = { index, create, show, update, destroy, commentCreate, commentDelete }
