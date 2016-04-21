var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var UserIframeComponent = require('./user-iframe.jsx');


var CriticDisplayComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  handleSubmit: function(e){
    e.preventDefault();

    this.setState({"currentProject": e.target.value});
    window.setCookie("currentProject", e.target.value);
    console.log("getting cookie", window.getCookie("currentProject"));
    var projectUrl = e.target.getAttribute("data-url");
    console.log('critic working', projectUrl);

    var projectKey = e.target.getAttribute("objectId");
    console.log('critic project getAttribute', projectKey);
    $('#critic-iframe').attr("src", projectUrl);

  },

  render: function(){
    <div id="wrapper">
      <div id="button" onClick={this.displaySurvey}>
        <input type="submit" id="feedback-button" className="invisible" value="GIVE FEEDBACK"/>
      </div>
      <iframe frameBorder="0" border="0" id="critic-iframe" className="invisible"></iframe>
    </div>
  }
});

module.exports = CriticDisplayComponent;
