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
var EditorLinkComponent = require('./components/admin-submit-link.jsx');
var WelcomeComponent = require('./components/welcome.jsx');
var NewProjectComponent = require('./components/designer-new-post.jsx');
var DesignerProjectsComponent = require('./components/designer-projects.jsx');
var CriticComponent = require('./components/critic.jsx');
var DesignerComponent = require('./components/designer.jsx');
var models = require('./models/model');

var Router = Backbone.Router.extend({
  initialize: function(){
    Parse.initialize("final_project");
    Parse.serverURL = 'http://tiy-gvl-demo-day.herokuapp.com/';
  },
  routes : {
    "": "index",
    "designer": "designer", //admin
    "designer/signup": "designerSignup",
    "designer/login": "designerLogin",
    "designer/projects/new": "designerProjectsNew",
    "designer/projects/(:id)/results": "designResults",
    "critic": "critic",
    "critic/signup": "criticSignup",
    "critic/login": "criticLogin",
  },
  index: function() {
    this.current = "index";
    ReactDOM.render(
      React.createElement(WelcomeComponent, {router: this}),
      document.getElementById('app')
    );
  },
  designer: function() {
    this.current = "dashboard";
    // If user is not logged in, require login/signup
    if(!Parse.User.current()){
      this.navigate('designer/login', {trigger: true});
    }
    ReactDOM.render(
      React.createElement(DesignerComponent, {router: this}),
      document.getElementById('app')
    );
  },
  designerSignup: function() {
    this.current = "signup";
    ReactDOM.render(
      React.createElement(DesignerComponent, {router: this}),
      document.getElementById('app')
    );
  },
  designerLogin: function() {
    this.current = "login";
    if(Parse.User.current()){
      this.navigate('designer', {trigger: true});
    }
    ReactDOM.render(
      React.createElement(DesignerComponent, {router: this}),
      document.getElementById('app')
    );
  },
  designerProjectsNew: function() {
    this.current = "new-project";
    ReactDOM.render(
      React.createElement(DesignerComponent, {router: this}),
      document.getElementById('app')
    );
  },
  designResults: function(id) {
    this.current = "design-results";
    this.projectId = id;

    ReactDOM.render(
      React.createElement(DesignerComponent, {router: this}),
      document.getElementById('app')
    );
  },
  critic: function() {
    this.current = "critic";
    ReactDOM.render(
      React.createElement(CriticComponent, {router: this}),
      document.getElementById('app')
    );
  },
  criticSignup: function() {
    this.current = "critic-signup";
    ReactDOM.render(
      React.createElement(CriticComponent, {router: this}),
      document.getElementById('app')
    );
  },
  criticLogin: function() {
    this.current = "critic-login";
    ReactDOM.render(
      React.createElement(CriticComponent, {router: this}),
      document.getElementById('app')
    );
  }
    // ReactDOM.render(
    //   React.createElement(UserSignupComponent),
    //   document.getElementById('user-signup')
    // );
    // ReactDOM.render(
    //   React.createElement(ToggleComponent),
    //   document.getElementById('header-login')
    // );
    // ReactDOM.render(
    //   React.createElement(UserLoginComponent),
    //   document.getElementById('user-login')
    // );
    // ReactDOM.render(
    //   React.createElement(UserIframeComponent),
    //   document.getElementById('display-iframe')
    // );
});

var router = new Router();

module.exports = router
