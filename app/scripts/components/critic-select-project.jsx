var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var UserIframeComponent = require('./user-iframe.jsx');


var CriticSelectProjectComponent = React.createClass({
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
    // var projectKey = this.props.project.objectId;

    $('#critic-project-list').addClass('invisible');
    $('#display-iframe').removeClass('invisible');
    $('#critic-iframe').removeClass('invisible');
    $('#critic-iframe').attr("src", projectUrl);

  },

  render: function(){
    var project = this.props.project;
    var projectKey = this.props.project.objectId;
    console.log("critic select project world: ", project);
    console.log("critic projectKey", projectKey);
    return <button onClick={this.handleSubmit} projectKey={project.id} project={project} value={projectKey} data-url={project.url}>{project.projectName}</button>;
  }
});

module.exports = CriticSelectProjectComponent;
