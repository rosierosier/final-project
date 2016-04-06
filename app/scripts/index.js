console.log('Hello World!');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var ImageListing = require('./components/listing.jsx');
var FormComponent = require('./components/form.jsx');
var models = require('./models/model')

// var newModelCollection = new models.ModelCollection();
//
//
// ReactDOM.render(
//   <ImageListing collection={newImageCollection}/>,
//   document.getElementById('app')
// );

// newImageCollection.fetch();

var $ = require('jquery');
var Parse = require('parse');

$(function(){
  Parse.initialize("final_project");
  Parse.serverURL = 'http://tiy-gvl-demo-day.herokuapp.com/';

  // var TestObject = Parse.Object.extend("TestObject");
  // var testObject = new TestObject();
  // testObject.save({foo: "bar"}).then(function(object) {
  //   alert("yay! it worked");
  // });

  // var TestObject = Parse.Object.extend("TestObject");
  // var testObject = new TestObject();
  // testObject.save({foo: "bar"}).then(function(object) {
  //   alert("yay! it worked");
  // });

  $('#signup').on('submit', function(event){
    event.preventDefault();

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
