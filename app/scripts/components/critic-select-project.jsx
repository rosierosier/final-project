var Parse = require('parse');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var models = require('../models/model')

var CriticSelectProjectComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  handleProjectSelection: function(e){
    e.preventDefault();
    var projectKey = this.props.project.objectId;
    this.props.router.navigate('critic/project', {trigger: true});
  },
  render: function(){
    var project = this.props.project;
    var projectKey = this.props.project.objectId;

    return (
      <button onClick={this.handleProjectSelection} projectKey={projectKey} value={projectKey}>
        {project.projectName}
      </button>
    );
  }
});

module.exports = CriticSelectProjectComponent;
