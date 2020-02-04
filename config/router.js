const router = require('express').Router()

const quotes = require('../controllers/quotes')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/quotes')
  .get(quotes.index)
  .post(secureRoute, quotes.create)

router.route('/quotes/:id')
  .get(quotes.show)
  .put(secureRoute, quotes.update)
  .delete(secureRoute, quotes.destroy)

router.route('/quotes/:id/comments')
  .post(secureRoute, quotes.commentCreate)

router.route('/quotes/:id/comments/:commentId')
  .delete(secureRoute, quotes.commentDelete)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router