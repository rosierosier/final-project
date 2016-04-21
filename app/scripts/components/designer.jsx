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
var DesignResults = require('./design-results.jsx');

var models = require('../models/model');


var DesignerComponent = React.createClass({

render: function(){
  var self = this;
  var router = this.props.router;
  var componentToDisplay;

  switch(router.current){
    case "signup":
      componentToDisplay = (
        <div id="welcome-admin" className="row welcome-admin">
          <div id="admin-signup-left" className="col-md-6 col-sm-6 col-xs-12 text-center">
            <p className="box-heading">Hello Designer!</p>
            <p>Please sign up using your email address.</p>
            <p>Let&apos;s get started!</p>
          </div>

          <div id="admin-signup" className="col-md-6 col-sm-6 col-xs-12 text-center">
            <UserSignupComponent />
          </div>

          <div style={{clear: 'both'}} />

          <div id="welcome-admin-photo"></div>
        </div>
      );
      break;

    case "login":
      componentToDisplay = (
        <div id="welcome-admin" className="row welcome-admin">
          <div id="admin-signup-left" className="col-md-6 col-sm-6 col-xs-12 text-center">
            <p className="box-heading">Hello Designer!</p>
            <p>Please sign in using your email address.</p>
            <p>Let&apos;s get started!</p>
          </div>

          <div id="admin-login" className="col-md-6 col-sm-6 col-xs-12 text-center">
            <UserLoginComponent />
          </div>

          <div style={{clear: 'both'}} />

          <div id="welcome-admin-photo"></div>
        </div>
      );
      break;

    case "dashboard":
      componentToDisplay = (
        <div className="row project-options">
          <div id="welcome-admin-photo"></div>

          <div id="designer-projects" className="col-md-6 col-sm-6 col-xs-12 text-center">
            <p className="box-heading">Want to check out your past projects?</p>
            <div id="past-projects">
              <DesignerProjectsComponent router={router}/>
            </div>

            <div style={{'clear': 'both'}} />
          </div>

          <div id="designer-new" className="col-md-6 col-sm-6 col-xs-12 text-center">
            <p className="box-heading">Have a new design you&apos;d like to post?</p>
            <div id="start-fresh">
              <a id="start-fresh-button" href="#designer/projects/new">
                START FRESH!
              </a>
            </div>
          </div>
        </div>
      );
      break;

    case "new-project":
      componentToDisplay = (
        <div>
          <div id="welcome-admin-photo"></div>
          <div id="admin-display-link" className="col-md-6 col-sm-6 col-xs-12 text-center">
            <h2>Create a New Project</h2>

            <EditorLinkComponent />
          </div>
        </div>
      );
      break;

    case "design-results":
      componentToDisplay = (
        <div className="row project-options">
          <div id="welcome-admin-photo"></div>

          <DesignResults router={this.props.router} />
        </div>
      );
      break;
  }

  return (
    <div>
      <div className="row header">
        <div className="header-logo" />
        <a href="#" role="button">Home</a>
        <a href="#critic" role="button">Critic</a>
        <div id="header-login">
          <ToggleComponent router={this.props.router} />
        </div>
      </div>

      <div className="container-fluid">
        {componentToDisplay}
      </div>
    </div>
    )
  }
});

module.exports = DesignerComponent
