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
var EditorLinkComponent = require('./components/admin-submit-link.jsx');
var AdminResultsComponent = require('./components/admin-results.jsx');
var WelcomeComponent = require('./components/welcome.jsx');
var models = require('./models/model');

if (isIndex) {
  ReactDOM.render(
    <WelcomeComponent />,
    document.getElementById('welcome-packet')
  );

  ReactDOM.render(
    <UserSignupComponent />,
    document.getElementById('user-signup')
  );

  ReactDOM.render(
    <ToggleComponent />,
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
    <UserSignupComponent />,
    document.getElementById('user-signup')
  );

  ReactDOM.render(
    <ToggleComponent />,
    document.getElementById('header-login')
  );

  ReactDOM.render(
    <UserLoginComponent />,
    document.getElementById('user-login')
  );

  ReactDOM.render(
    <EditorComponent />,
    document.getElementById('text-editor')
  );

  ReactDOM.render(
    <EditorLinkComponent />,
    document.getElementById('admin-display-link')
  );

  ReactDOM.render(
    <AdminResultsComponent />,
    document.getElementById('admin-results')
  );
}


$(function(){
  Parse.initialize("final_project");
  Parse.serverURL = 'http://tiy-gvl-demo-day.herokuapp.com/';

  // var TestObject = Parse.Object.extend("TestObject");
  // var testObject = new TestObject();
  // testObject.save({foo: "bar"}).then(function(object) {
  //   alert("yay! it worked");
  // });

  $('#logout').on('submit', function(event){
    event.preventDefault();
    console.log("logout clicked", Parse.User.current());

    Parse.User.logOutInBackground(Parse.User.current());
    Parse.User.current();
    console.log('logged out:', (Parse.User.current()));
  });
  console.log('final log:', (Parse.User.current()));
});
