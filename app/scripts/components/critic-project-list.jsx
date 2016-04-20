var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')
var CriticSelectProjectComponent = require('./critic-select-project.jsx')

var CriticProjectsComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  handleSubmit: function(e) {
    e.preventDefault();
    var Project = new models.Project();
    var query = new Parse.Query(Project);

    console.log("critic querying for projects");
    // query.equalTo("user", Parse.User.current());
    var outerReactClass = this;
    var callbackAfterQuery = function(designerProjectsArray) {
      console.log("critic setting state on: ", outerReactClass);
      outerReactClass.setState({"projects": designerProjectsArray});
    }
    query.find({
      success: function(results){
        // console.log("found me some projects", results);
        var designerProjectsArray = [];

        for (var parseResultIndex = 0; parseResultIndex < results.length; parseResultIndex++) {
          var parseResponse = results[parseResultIndex];
          // var projectKey = parseResultIndex[0].id;
          console.log("critic received project result:", parseResultIndex, parseResponse);
          designerProjectsArray.push({"objectId": parseResponse.id, "url": parseResponse.get("url"), "projectName": parseResponse.get("projectName")});
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
            return <div key={index}><CriticSelectProjectComponent projectKey={project.id} project={project}/></div>;
          })}
        </div>
      );
    } else {
      return <button id="my-project-button" onClick={this.handleSubmit}>MY PROJECTS</button>;
    }
  }
});

module.exports = CriticProjectsComponent;
