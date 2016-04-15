console.log('Hello World!');
var $ = require('jquery');
var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var UserSignupComponent = require('./components/user-signup.jsx');
var UserLoginComponent = require('./components/user-login.jsx');
var ToggleComponent = require('./components/toggle.jsx');
var UserIframeComponent = require('./components/user-iframe.jsx');
var SurveyComponent = require('./components/survey.jsx');
// var EditorComponent = require('./components/editor.jsx');
var EditorLinkComponent = require('./components/admin-submit-link.jsx');
var AdminResultsComponent = require('./components/admin-results.jsx');
var WelcomeComponent = require('./components/welcome.jsx');
var NewProjectComponent = require('./components/designer-new-post.jsx');
var DesignerProjectsComponent = require('./components/designer-projects.jsx');
var SelectProjectComponent = require('./components/select-project.jsx');
var models = require('./models/model');


var isAdmin = ("" + window.location.href).indexOf("/admin.html") > 0;
var isCritic = ("" + window.location.href).indexOf("/critic.html") > 0;
var isIndex = ("" + window.location.href).indexOf("/index.html") > 0;
// alert("" + window.location.href + "\n\nisAdmin: " + isAdmin);

if (isIndex) {
  ReactDOM.render(
    <WelcomeComponent />,
    document.getElementById('welcome-packet')
  );
  // ReactDOM.render(
  //   <ToggleComponent />,
  //   document.getElementById('home-header-login')
  // );
  ReactDOM.render(
    <UserLoginComponent />,
    document.getElementById('user-login')
  );
}

if (isAdmin) {
  ReactDOM.render(
    <UserSignupComponent />,
    document.getElementById('admin-signup')
  );
  ReactDOM.render(
    <ToggleComponent />,
    document.getElementById('header-login')
  );
  ReactDOM.render(
    <UserLoginComponent />,
    document.getElementById('user-login')
  );
  // ReactDOM.render(
  //   <EditorComponent />,
  //   document.getElementById('text-editor')
  // );
  ReactDOM.render(
    <NewProjectComponent />,
    document.getElementById('start-fresh')
  );
  ReactDOM.render(
    <DesignerProjectsComponent />,
    document.getElementById('past-projects')
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

if (isCritic) {
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
