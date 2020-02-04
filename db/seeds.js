const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Quote = require('../models/quote')
const User = require('../models/user')

//changed year numbers to string because of dropdown in frontend says 2000-Present as a value

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'Rain',
          email: 'rain@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        },
        {
          username: 'Astara',
          email: 'astara@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
    .then(createdUsers => {
      return Quote.create([
        {
          author: 'J D Salinger',
          quote: 'Among other things, you\'ll find that you\'re not the first person who was ever confused and frightened and even sickened by human behavior. You\'re by no means alone on that score, you\'ll be excited and stimulated to know. Many, many men have been just as troubled morally and spiritually as you are right now. Happily, some of them kept records of their troubles. You\'ll learn from them—if you want to. Just as someday, if you have something to offer, someone will learn something from you. It\'s a beautiful reciprocal arrangement. And it isn\'t education. It\'s history. It\'s poetry.',
          source: 'Catcher in the Rye',
          theme: 'Morals',
          year: '1950',
          isBook: true,
          user: createdUsers[1]
        },
        {
          author: 'Boris Pasternak',
          quote: 'I don\'t think I could love you so much if you had nothing to complain of and nothing to regret. I don\'t like people who have never fallen or stumbled. Their virtue is lifeless and of little value. Life hasn\'t revealed its beauty to them.',
          source: 'Dr. Zhivago',
          theme: 'Love',
          year: '1960',
          isBook: true,
          user: createdUsers[1]
        },
        {
          author: 'Charlie Kaufmann',
          quote: 'Everything is more complicated than you think. You only see a tenth of what is true. There are a million little strings attached to every choice you make; you can destroy your life every time you choose. But maybe you won\'t know for twenty years. And you may never ever trace it to its source. And you only get one chance to play it out. Just try and figure out your own divorce. And they say there is no fate, but there is: it\'s what you create. And even though the world goes on for eons and eons, you are only here for a fraction of a fraction of a second. Most of your time is spent being dead or not yet born. But while alive, you wait in vain, wasting years, for a phone call or a letter or a look from someone or something to make it all right. And it never comes or it seems to but it doesn\'t really. And so you spend your time in vague regret or vaguer hope that something good will come along. Something to make you feel connected, something to make you feel whole, something to make you feel loved. And the truth is I feel so angry, and the truth is I feel so fucking sad, and the truth is I\'ve felt so fucking hurt for so fucking long and for just as long I\'ve been pretending I\'m OK, just to get along, just for, I don\'t know why, maybe because no one wants to hear about my misery, because they have their own. Well, fuck everybody. Amen.',
          source: 'Synecdoche, New York',
          theme: 'Existential',
          year: '2000-Present',
          isBook: false,
          user: createdUsers[0]
        },
        {
          author: 'Milan Kundera',
          quote: 'We all need someone to look at us. We can be divided into four categories according to the kind of look we wish to live under. The first category longs for the look of an infinite number of anonymous eyes, in other words, for the look of the public. The second category is made up of people who have a vital need to be looked at by many known eyes. They are happier than the people in the first category, who, when they lose their public, have the feeling that the lights have gone out in the room of their lives. This happens to nearly all of them sooner or later. People in the second category, on the other hand, can always come up with the eyes they need. Then there is the third category, the category of people who need to be constantly before the eyes of the person they love. Their situation is as dangerous as the situation of people in the first category. One day the eyes of their beloved will close, and the room will go dark. And finally there is the fourth category, the rarest, the category of people who live in the imaginary eyes of those who are not present. They are the dreamers.',
          source: 'The Unbearable Lightness of Being',
          theme: 'Differences',
          year: '1980',
          isBook: true,
          user: createdUsers[1]
        },
        {
          author: 'Frank Herbert',
          quote: 'I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.',
          source: 'Dune',
          theme: 'Fear',
          year: '1960',
          isBook: true,
          user: createdUsers[1]
        }
      ])
    })
    .then(createdQuotes => console.log(`${createdQuotes.length} quotes created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})      
