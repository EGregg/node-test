const utils = require('./utils');

it('should add two numbers', () =>{
  var res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`)

  }

});

it('should square a number', () =>{
  var wrong = utils.square(3);

  if (wrong !== 9){
    throw new Error(`Expected 9, but got ${wrong}.`)
  }

});
