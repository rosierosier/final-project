var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var SelectProjectComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  handleSubmit: function(e){
    alert("gonna be current project: " + e.target.value);
    e.preventDefault();
    this.setState({"currentProject": e.target.value}, function() { alert("current project: " + this.state.currentProject); });
    console.log('past project submit working');
    $('.project-options').addClass('invisible');
    // return {items: designerProjectsArray};
    $('#admin-results').removeClass('invisible');
  },

  render: function(){
    var project = this.props.project;
    console.log("hello select project world: ", project);
    return <button onClick={this.handleSubmit} value={project.objectId}>{project.projectName}</button>;
  }
});

module.exports = SelectProjectComponent;
