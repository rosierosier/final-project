console.log('Hello Log In');
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
    $('#result').removeClass('invisible');
    $('#feedback-button').removeClass('invisible');
    $('#user-login').addClass('invisible');
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
