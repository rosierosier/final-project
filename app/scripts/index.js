console.log('Hello World!');
var $ = require('jquery');
var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var isAdmin = ("" + window.location.href).indexOf("/admin.html") > 0;
var isIndex = !isAdmin;
// alert("" + window.location.href + "\n\nisAdmin: " + isAdmin);

// var ImageListing = require('./components/listing.jsx');
var UserSignupComponent = require('./components/user-signup.jsx');
var UserLoginComponent = require('./components/user-login.jsx');
var ToggleComponent = require('./components/toggle.jsx');
var UserIframeComponent = require('./components/user-iframe.jsx');
var SurveyComponent = require('./components/survey.jsx');
var EditorComponent = require('./components/editor.jsx');
var models = require('./models/model');

if (isIndex) {
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

  ReactDOM.render(
    <SurveyComponent />,
    document.getElementById('survey')
  );
}

if (isAdmin) {
  ReactDOM.render(
    <EditorComponent />,
    document.getElementById('text-editor')
  );
}

// window.onload = function(){
//   ReactDOM.render(
//   <EditorComponent />
//   document.getElementById('text-editor')
// )};


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
