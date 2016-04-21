var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model');
var SelectProjectComponent = require('./select-project.jsx');

var DesignerProjectsComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  componentDidMount: function() {
    var self = this;
    var Project = new models.Project();
    var query = new Parse.Query(Project);

    query.equalTo("user", Parse.User.current());
    query.find({
      success: function(results){
        var designerProjectsArray = [];

        for (var parseResultIndex = 0; parseResultIndex < results.length; parseResultIndex++) {
          var parseResponse = results[parseResultIndex];

          designerProjectsArray.push({
            "objectId": parseResponse.id,
            "projectName": parseResponse.get("projectName")
          });
        }

        self.setState({"projects": designerProjectsArray});
        console.log("querying for projects received:", designerProjectsArray);
      },
      error: function() {
        alert("error loading projects");
      }
    });
  },

  render: function(){
    var router = this.props.router;
    var projects = this.state.projects;

    if (!projects || projects.length == 0) {
      return (<div/>);
    }

    return (
      <div className="project-list-div">
        {projects.map(function(project, index) {
          return (
            <div key={project.id}>
              <SelectProjectComponent projectKey={project.id} project={project} router={router}/>
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = DesignerProjectsComponent;
