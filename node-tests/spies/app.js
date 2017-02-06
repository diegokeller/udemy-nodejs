var db = require('./db.js');

var handleSignup = (email, password) => {

  db.saveUser({email, password});

};

module.exports = {
  handleSignup
};
