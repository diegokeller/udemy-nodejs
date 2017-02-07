var mongoose = require('mongoose');

// Usar a biblioteca padrão de promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Another task',
//   completed: false
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
//   console.log(e);
// });


var secondTodo = new Todo({
  text: 'Cook dinner',
  completed: true,
  completedAt: 123
});

secondTodo.save().then((doc) => {
  console.log('Saved', doc);
}).catch((e) => {
  console.log('Unable to save', e);
});
