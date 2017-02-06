const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  var users = [{
    name: 'Diego',
    age: 29
  },
  {
    name: 'Vilson',
    age: 41
  }];
  res.status(200).send(users);
});

app.listen(3000);

module.exports.app = app;
