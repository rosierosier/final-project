var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model');

var CriticProjectsComponent = require('./critic-project-list.jsx');
var LogoutComponent = require('./logout.jsx');


var isAdmin = ("" + window.location.href).indexOf("/admin.html") > 0;
var isCritic = ("" + window.location.href).indexOf("/critic.html") > 0;
var isIndex = ("" + window.location.href).indexOf("/index.html") > 0;
// alert("" + window.location.href + "\n\nisAdmin: " + isAdmin);

var UserLoginComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    console.log('submit working');
    Parse.User
      .logIn($('#login-email').val(), $('#login-user-password').val(), {
        success: function(user) {
          console.log("login", user);
          $('#user-login').addClass('invisible');
          $('#critic-signup-left').addClass('invisible');
          $('#admin-signup-left').addClass('invisible');

          $('#result').removeClass('invisible');
          $('#designer-new').removeClass('invisible');
          $('#designer-projects').removeClass('invisible');

          $('#feedback-button').removeClass('invisible');

          ReactDOM.render(
            <LogoutComponent />,
            document.getElementById('header-login')
          );

          if(isCritic) {
            console.log("critic login loading projects");
            ReactDOM.render(
              <CriticProjectsComponent />,
              document.getElementById('critic-new-projects')
            );
          };
          $('#critic-projects').removeClass('invisible');

        },
        error: function(user, error) {
          // The login failed. Check error to see why.
        }
      });
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="login-email" placeholder="Email Address" id="login-email" className=""/><br/>
        <input type="password" name="login-user-password" placeholder="Password" id="login-user-password" className=""/><br/>
        <input type="reset" id="cancel-button" value="CANCEL"/>
        <input type="submit" id="log-in-button" value="LOG IN"/>
      </form>
    );
  }
});

module.exports = UserLoginComponent;
