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
var CriticDisplayComponent = require('./critic-display-project.jsx');
var LogoutComponent = require('./logout.jsx');
var DesignResults = require('./design-results.jsx');

var models = require('../models/model');

var CriticComponent = React.createClass({

render: function(){
  var self = this;
  var router = this.props.router;
  var componentToDisplay;
  console.log(this.props);

  switch(router.current){
    case "critic-signup":
      componentToDisplay = (
        <div id="welcome-admin" className="row welcome-admin">
          <div id="critic-signup-left" className="col-md-6 col-sm-6 col-xs-12 text-center">
            <p className="box-heading">Hello Critic!</p>
            <p>Please sign up using your email address.</p>
            <p>Let&apos;s get started!</p>
          </div>

          <div id="user-signup" className="col-md-6 col-sm-6 col-xs-12 text-center">
            <UserSignupComponent />
          </div>

          <div style={{clear: 'both'}} />

          <div id="welcome-admin-photo"></div>
        </div>
      );
      break;

    case "critic-login":
    componentToDisplay = (
      <div id="welcome-admin" className="row welcome-admin">
        <div id="critic-signup-left" className="col-md-6 col-sm-6 col-xs-12 text-center">
          <p className="box-heading">Hello Critic!</p>
          <p>Please sign in using your email address.</p>
          <p>Let&apos;s get started!</p>
        </div>

        <div id="user-login" className="col-md-6 col-sm-6 col-xs-12 text-center">
          <UserLoginComponent />
        </div>

        <div style={{clear: 'both'}} />

        <div id="welcome-admin-photo"></div>
      </div>
    );
    break;

    case "critic-dashboard":
    componentToDisplay = (
      <div id="critic-project-list" className="row critic-project-list">
        <div id="critic-projects" className="col-md-6 col-sm-6 col-xs-12 text-center">
          <p className="box-heading">You have new projects to review!</p>
          <div id="critic-new-projects">
            <CriticProjectsComponent router={router}/>
          </div>
        </div>
      </div>
    );
    break;

    case "critic-project":
    componentToDisplay = (
      <div id="display-iframe" className="row editor">
        <CriticDisplayComponent router={router} project={this.props.project}/>
      </div>
    );
    break;

    case "survey":
    componentToDisplay = (
      <div id="survey" className="row">
        <SurveyComponent router={router}/>
      </div>
    );
    break;
  }

  return (
    <div>
      <div className="row header">
        <div className="header-logo" />
        <a href="#" role="button">Home</a>
        <a href="#designer" role="button">Designer</a>
        <div id="header-login">
          <ToggleComponent router={this.props.router} />
          <LogoutComponent router={this.props.router} />
        </div>
      </div>

      <div className="container-fluid">
        {componentToDisplay}
      </div>
    </div>
  )
}

})

module.exports = CriticComponent
