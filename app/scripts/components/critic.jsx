var React = require('react');
var ReactDOM = require('react-dom');

var UserSignupComponent = require('./user-signup.jsx');
var UserLoginComponent = require('./user-login.jsx');
var ToggleComponent = require('./toggle.jsx');
var UserIframeComponent = require('./user-iframe.jsx');
var SurveyComponent = require('./survey.jsx');
var EditorLinkComponent = require('./admin-submit-link.jsx');
var WelcomeComponent = require('./welcome.jsx');
var NewProjectComponent = require('./designer-new-post.jsx');
var DesignerProjectsComponent = require('./designer-projects.jsx');
var SelectProjectComponent = require('./select-project.jsx');
var CriticProjectsComponent = require('./critic-project-list.jsx');
var models = require('../models/model');

var CriticComponent = React.createClass({

render: function(){
  return (
    <div>
      <div className="row welcome-admin">
        <div id="critic-signup-left" className="col-md-6 col-sm-6 col-xs-12 text-center">
          <p className="box-heading">Hello Critic!</p>
          <p>Please sign up using your email address.</p>
          <p>Let&apos;s get started!</p>
        </div>
        <div id="user-signup" className="col-md-6 col-sm-6 col-xs-12 text-center"></div>
        <div id="user-login" className="col-md-6 col-sm-6 col-xs-12 text-center invisible"></div>
      </div>

      <div id="critic-project-list" className="row critic-project-list">
        <div id="critic-projects" className="col-md-6 col-sm-6 col-xs-12 text-center invisible">
          <p className="box-heading">You have new projects to review!</p>
          <div id="critic-new-projects">
            <input type="submit" id="critic-projects-button" value="REVIEW PROJECTS"/>
          </div>
        </div>
      </div>

      <div id="display-iframe" className="row invisible editor"></div>

      <div id="survey" className="row invisible"></div>
    </div>
  )
}

})

module.exports = CriticComponent
