console.log('Hello Sign Up');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var UserIframeComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  displaySurvey: function(e){
    e.preventDefault();
    console.log('toggle from iframe to survey');
  },

  render: function(){
    return (
      <div id="wrapper">
        <div onSubmit={this.displaySurvey}>
          <input type="submit" id="feedback-button" value="GIVE FEEDBACK"/>
        </div>
        <iframe frameBorder="0" border="0" id="result"></iframe>
      </div>
    );
  }
});

module.exports = UserIframeComponent;
