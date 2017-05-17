var mongoose = require('mongoose');

// Usar a biblioteca padrão de promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
