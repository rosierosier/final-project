var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var EditorLinkComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  handleSubmit: function(e){
    e.preventDefault();
    console.log("admin post link working");
    var adminUrl = document.getElementById("admin-link").value;
    var project = new models.Project();
    project.set("url", adminUrl);
    var newProjectName = document.getElementById("new-project-name").value;
    project.set("projectName", newProjectName);
    project.set("user", Parse.User.current());
    project.save(null, {
      success: function(project){
        alert('New object created for admin link');

      },
      error: function(project, error){
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  },
  render: function(){
    return (
      <div onSubmit={this.handleSubmit} id="newProjectDiv" className="wrapper">
        <form>
          <label htmlFor="project-name">Project Name</label><br/>
          <input type="text" name="new-project-name" placeholder="Project name here" id="new-project-name" className=""/><br/>
          <label htmlFor="project-link">Project Site</label><br/>
          <input type="text" name="admin-link" placeholder="Embed link here" id="admin-link" className=""/><br/>
          <input type="submit" id="submit-url" value="POST LINK"/>
        </form>
      </div>
    );
  }
});

module.exports = EditorLinkComponent;
