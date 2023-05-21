const mongoose = require('mongoose')
require('dotenv').config()

const password = process.argv[2]

// const url =
//   `mongodb+srv://janne:${password}@cluster0.o1opl.mongodb.net/testNoteApp?retryWrites=true&w=majority`

const url = process.env.TEST_MONGODB_URI


mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is easy',
  date: new Date(),
  important: true,
})


note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})


// Note.find({}).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })