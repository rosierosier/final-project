var Parse = require('parse');
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
    $('#survey').removeClass('invisible');
    $('#result').addClass('invisible');
    $('#feedback-button').addClass('invisible');
    $('#display-iframe').addClass('invisible');
  },

  render: function(){

    return (
      <div id="wrapper">
        <div id="button" onClick={this.displaySurvey}>
          <input type="submit" id="feedback-button" className="invisible" value="GIVE FEEDBACK"/>
        </div>
        <iframe frameBorder="0" border="0" id="critic-iframe" className="invisible"></iframe>
      </div>
    );
  }
});

module.exports = UserIframeComponent;
