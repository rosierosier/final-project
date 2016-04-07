var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model');
var UserSignupComponent = require('./user-signup.jsx');

console.log('Hello Login');

var ToggleComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  displayForm: function(e){
    e.preventDefault();
    console.log('displaying form');
    $('#user-signup').addClass('invisible');
    $('#user-login').removeClass('invisible');
  },

  render: function(){
    return (
      <div id="header" onClick={this.displayForm}>
        <input type="submit" id="log-in-header" value="LOG IN"/>
      </div>
    )
  }
});

module.exports = ToggleComponent;
