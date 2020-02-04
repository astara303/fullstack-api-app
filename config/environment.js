const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/book-and-movie-quotes-api'
const secret = process.env.SECRET || 'the secret'

module.exports = { port, dbURI, secret }