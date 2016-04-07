console.log('Hello World!');
var $ = require('jquery');
var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
// var ImageListing = require('./components/listing.jsx');
var UserSignupComponent = require('./components/user-signup.jsx');
var UserLoginComponent = require('./components/user-login.jsx');
var ToggleComponent = require('./components/toggle.jsx');
var UserIframeComponent = require('./components/user-iframe.jsx');
var models = require('./models/model')

ReactDOM.render(
  <UserSignupComponent />,
  document.getElementById('user-signup')
);

ReactDOM.render(
  <ToggleComponent />,
  // $(#header).apend(<UserLoginComponent />)
  document.getElementById('header-login')
);

ReactDOM.render(
  <UserLoginComponent />,
  document.getElementById('user-login')
);

ReactDOM.render(
  <UserIframeComponent />,
  document.getElementById('display-iframe')
);


$(function(){
  Parse.initialize("final_project");
  Parse.serverURL = 'http://tiy-gvl-demo-day.herokuapp.com/';

  // var TestObject = Parse.Object.extend("TestObject");
  // var testObject = new TestObject();
  // testObject.save({foo: "bar"}).then(function(object) {
  //   alert("yay! it worked");
  // });

  $('#signup').on('submit', function(event){
    event.preventDefault();

    console.log('index submit working');
    var user = new Parse.User();
    user.set({'username': $('#email').val(), 'password': $('#user-password').val()});

    user.signUp(null, {
      'success': function(results){
        console.log("results: ", results);
        // ##############
        // then, display test page
        // ##############
      },
      'error': function(user, error){
        console.log(user, error);
      }
    });
  });

  $('#login').on('submit', function(event){
    event.preventDefault();

    Parse.User
      .logIn($('#login-email').val(), $('#login-user-password').val(), {
        success: function(user) {
          console.log("login", user);
            // ##############
            // then, display test page
            // ##############
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
        }
      });
  });

  $('#logout').on('submit', function(event){
    event.preventDefault();
    console.log("logout clicked", Parse.User.current());

    Parse.User.logOutInBackground(Parse.User.current());
    Parse.User.current();
    console.log('logged out:', (Parse.User.current()));
  });
  console.log('final log:', (Parse.User.current()));
});


var TextEditor = Parse.Object.extend("TextEditor");
var textEditor = new TextEditor();
textEditor.set("data", data_url);
textEditor.save(null, {
  success: function(textEditor){
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectID: ' + textEditor.id);
  },
  error: function(textEditor, error){
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
