var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model');

var LogoutComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  logout: function(e){
    Parse.User.logOut({
      success: function(){
        console.log("log out successful");
      },
      error: function(user, error) {
        // The logout failed. Check error to see why.
      }
    });
  },

  render: function(){
    return (
      <div id="header" onClick={this.logout}>
        <a href="index.html" id="log-out-header" role="button">LOG OUT</a>
      </div>
    )
  }
});

module.exports = LogoutComponent
