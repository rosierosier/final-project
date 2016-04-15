var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var CriticSelectProjectComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  handleSubmit: function(e){
    // alert("gonna be current project: " + e.target.value);
    e.preventDefault();
    this.setState({"currentProject": e.target.value});
    var projectUrl = e.target.getAttribute("data-url");
    console.log('working', projectUrl);
    $('#critic-project-list').addClass('invisible');
    $('#display-iframe').removeClass('invisible');
    $('#critic-iframe').removeClass('invisible');
    $('#critic-iframe').attr("src", projectUrl);
  },

  render: function(){
    var project = this.props.project;
    console.log("hello select project world: ", project);
    return <button onClick={this.handleSubmit} value={project.objectId} data-url={project.url}>{project.projectName}</button>;
  }
});

module.exports = CriticSelectProjectComponent;
