var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')
var SelectProjectComponent = require('./select-project.jsx')

var DesignerProjectsComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  handleSubmit: function(e) {
    e.preventDefault();
    var Project = new models.Project();
    var query = new Parse.Query(Project);
    console.log("querying for projects");
    // query.equalTo("user", Parse.User.current());
    var outerReactClass = this;
    var callbackAfterQuery = function(designerProjectsArray) {
      console.log("setting state on: ", outerReactClass);
      outerReactClass.setState({"projects": designerProjectsArray});
    }
    query.find({
      success: function(results){
        // console.log("found me some projects", results);
        var designerProjectsArray = [];

        for (var parseResultIndex = 0; parseResultIndex < results.length; parseResultIndex++) {
          var parseResponse = results[parseResultIndex];
          console.log("received project result:", parseResultIndex, parseResponse);
          designerProjectsArray.push({"objectId": parseResponse.id, "projectName": parseResponse.get("projectName")});
        }
        callbackAfterQuery(designerProjectsArray);
        console.log("querying for projects received:", designerProjectsArray);
      },
      error: function() {
        alert("error loading projects");
      }
    });
  },

  render: function(){
    var projects = this.state.projects;
    if (projects && projects.length) {
      return (
        <div className="project-list-div">
          {projects.map(function(project, index) {
            return <div key={index}><SelectProjectComponent key={index} project={project}/></div>;
          })}
        </div>
      );
    } else {
      return <button id="my-project-button" onClick={this.handleSubmit}>MY PROJECTS</button>;
    }
  }
});

module.exports = DesignerProjectsComponent;
