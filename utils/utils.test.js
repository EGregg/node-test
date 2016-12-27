const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () =>{
  var res = utils.add(33, 11);

  //using expect to perform assertions and test easier
  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}.`)
  //
  // }

});

//by adding in 'done' it waits for the 'done' function to be called before saying whether the test passed or failed
it('should async add two numbers', (done) =>{
  utils.asyncAdd(4,3,(sum)=>{
      expect(sum).toBe(7).toBeA('number');
      done();
  });
});

it('should async square a number', (done)=>{
  utils.asyncSquare(4,(res)=>{
    expect(res).toBe(16).toBeA('number');
    done();
  });
});

it('should square a number', () =>{
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
  });

  //verifying first and last names are set
  //assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () =>{
  var user = {location: 'Philadelphia', age: 25};
  var res = utils.setName(user, 'Andrew Mead');

  expect(res).toInclude({
    firstName: 'Andrew',
    lastName: 'Mead'
  });
});

  // it('should expect some values', () => {
  //   // expect(12).toNotBe(12);
  //   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
  //   expect({
  //     name: 'Andrew',
  //     age: 25,
  //     location: 'Philadelphia'
  //   }).toExclude({
  //     age:23
  //   })
  // });
