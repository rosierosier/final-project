console.log('Hello Log In');
var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var UserLoginComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    console.log('submit working');
    Parse.User
      .logIn($('#login-email').val(), $('#login-user-password').val(), {
        success: function(user) {
          console.log("login", user);
          $('#result').removeClass('invisible');
          $('#feedback-button').removeClass('invisible');
          $('#user-login').addClass('invisible');
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
