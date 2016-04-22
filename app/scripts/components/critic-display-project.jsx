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
    // var projectKey = this.props.project.objectId;
    console.log("routing to critic/survey/projectKey", this.props.project.id);
    var projectKey = this.props.project.id;
    this.props.router.navigate('critic/survey/' + projectKey, {trigger: true});
  },

  render: function(){
    var projectUrl = "";
    if (this.props.project){
      var projectUrl = this.props.project.get("url");
    }
    var projectKey = this.props.project.id;

    return (
      <div id="wrapper">
        <div id="button">
          <a id="feedback-button" onClick={this.displaySurvey} href={"#critic/survey/" + projectKey}>GIVE FEEDBACK</a>
        </div>
        <iframe frameBorder="0" src={projectUrl} border="0" id="critic-iframe" className=""></iframe>
      </div>
    );
  }
});

module.exports = CriticDisplayComponent;
