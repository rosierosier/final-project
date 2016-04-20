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
var SelectProjectComponent = require('./components/select-project.jsx');
var CriticProjectsComponent = require('./components/critic-project-list.jsx');
var models = require('./models/model');


var isAdmin = ("" + window.location.href).indexOf("/admin.html") > 0;
var isCritic = ("" + window.location.href).indexOf("/critic.html") > 0;
var isIndex = ("" + window.location.href).indexOf("/index.html") > 0 || ("" + window.location.href).endsWith("/dist/");

if (isIndex) {
  ReactDOM.render(
    <WelcomeComponent />,
    document.getElementById('welcome-packet')
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
}


$(function(){
  Parse.initialize("final_project");
  Parse.serverURL = 'http://tiy-gvl-demo-day.herokuapp.com/';
});

window.getCookie = function(cookieName) {
	if (document.cookie.length > 0) {
		var indexOfCookieStart = document.cookie.indexOf(cookieName + "=");
		if (indexOfCookieStart != -1) {
			var cookieNameValuePairs = document.cookie.split("; ");
			for (var cookieNameValuePairIndex = 0; cookieNameValuePairIndex < cookieNameValuePairs.length; cookieNameValuePairIndex++) {
				var cookieNameValuePair = cookieNameValuePairs[cookieNameValuePairIndex];
				if (cookieNameValuePair.indexOf(cookieName + "=") === 0) {
					return decodeURIComponent(cookieNameValuePair.substring(cookieName.length + 1));
				}
			}
		}
	}
	return "";
};

window.setCookie = function(cookieName, value, daysToKeep) {
	document.cookie = cookieName + "=" + encodeURIComponent(value) + ";path=/" +
					((daysToKeep) ? ";max-age=" + (daysToKeep * 60 * 60 * 24) : "");
};
