console.log('Hello Sign Up');
var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var UserSignupComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    console.log('signup submit working');

    var user = new Parse.User();
    user.set({'username': $('#email').val(), 'password': $('#user-password').val()});

    user.signUp(null, {
      'success': function(results){
        console.log("results: ", results);
        $('#user-signup').addClass('invisible');
        $('#user-login').removeClass('invisible');
      },
      'error': function(user, error){
        console.log(user, error);
      }
    });
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="email" placeholder="Email Address" id="email" className=""/><br/>
        <input type="password" name="user-password" placeholder="Password" id="user-password" className=""/><br/>
        <input type="reset" id="cancel-button" value="CANCEL"/>
        <input type="submit" id="sign-up-button" value="SIGN UP"/>
      </form>
    );
  }
});

module.exports = UserSignupComponent;
