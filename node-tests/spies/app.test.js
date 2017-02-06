const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {

    var spy = expect.createSpy();
    spy('Diego', 29);
    expect(spy).toHaveBeenCalledWith('Diego', 29);

  });

  it('should call saveUser with user Object', () => {
    var email = 'diego@email.com';
    var password = '123';
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
