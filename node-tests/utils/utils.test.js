const expect = require('expect');

const utils = require('./utils');

it('sould add two numbers', () => {
  var res = utils.add(33,11);
  expect(res).toBe(44).toBeA('number');
});

it('should asyncAdd two numbers', (done) => {
  utils.asyncAdd(2,3, (sum) => {
    expect(sum).toBe(5).toBeA('number');
    done();
  })
});

it('sould square a number', () => {
  var res = utils.square(4);
  expect(res).toBe(16).toBeA('number');
});

it('should asyncSquare a number', (done) => {
  utils.asyncSquare(3, (res) => {
    expect(res).toBeA('number').toBe(9);
    done();
  })
});

it('should expect some values', () => {
  // expect(12).toNotBe(12);
  // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
  // expect([2,3,4]).toExclude(1);
  expect({name: 'Diego', age: 29, location: 'Caxias'}).toInclude({
    age: 29
  });
});

it('should verifiy first and last names are set', () => {
  var user = {
    age: 29,
    location: 'Caxias'
  };
  var res = utils.setName(user, 'Diego Keller');
  expect(res).toBeA('object');
  expect(res).toInclude({
    firstName: 'Diego',
    lastName: 'Keller'
  });
});
