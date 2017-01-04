const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe ('App', () =>{
  var db = {
    saveUser: expect.createSpy()
  };
app.__set__('db', db);



  it('should call the spy correctly', ()=>{

    var spy =expect.createSpy();
    spy('Edward', 32);
    expect(spy).toHaveBeenCalledWith('Edward', 32);


  });

  it('should call saveUser with user object', () => {

    var email = 'andrew@example.com';
    var password = '123abc';

    app.handleSignup(email,password);
    //this is the test to see if the object has the correct fields
    expect(db.saveUser).toHaveBeenCalledWith({email, password});

  });


});
