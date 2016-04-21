var Parse = require('parse');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var models = require('../models/model')


var CriticDisplayComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  displaySurvey: function(){
    this.props.router.navigate("critic/survey", {trigger: true})
  },

  render: function(){
    var projectUrl = "";
    if (this.props.project){
      var projectUrl = this.props.project.get("url");
    }

    return (
      <div id="wrapper">
        <div id="button">
          <a id="feedback-button" href={"#critic/survey"}>GIVE FEEDBACK</a>
        </div>
        <iframe frameBorder="0" src={projectUrl} border="0" id="critic-iframe" className=""></iframe>
      </div>
    );
  }
});

module.exports = CriticDisplayComponent;
