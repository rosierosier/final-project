var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');
var ReactBootstrap = require('react-bootstrap');
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Button = ReactBootstrap.Button;

var models = require('../models/model');


var SurveyComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    console.log('survey submit working');

    var surveyData = new models.SurveyData();
    var project = new models.Project();
    var projectKey = this.props.project.objectId;

    surveyData.set("answer1", document.getElementById("answer1").value);
    surveyData.set("answer2", document.getElementById("answer2").value);
    surveyData.set("answer3", document.getElementById("answer3").value);
    surveyData.set("user", Parse.User.current());
    surveyData.set("username", Parse.User.current().get("username"));
    surveyData.set("projectName", this.props.project);
    surveyData.set("parent", project);
    surveyData.set("project", projectKey);
    // surveyData.set("parent", project);
    surveyData.save({
      success: function(surveyData){
        alert('Thank you for completing this survey!');
        $('#survey').addClass('invisible');
        console.log("getting parent:", surveyData.get("parent"));
      },
      error: function(surveyData, error){
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  },

  render: function(){
    var project = this.props.project;
    console.log(project);
    return (
      <div>
        <div id="survey-info">
          <p>Please rate the following answers when 1 is least and 5 is greatest.</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="question1">Would you recommend our website to a friend?</label><br/>
          <input type="text" name="survey-1" placeholder="Answer here" id="answer1" className=""/><br/>

          <label htmlFor="question2">How easy is our website to use?</label><br/>
          <input type="text" name="survey-2" placeholder="Answer 2 here" id="answer2" className=""/><br/>

          <label htmlFor="question3">What do you like least about our website?</label><br/>
          <input type="text" name="survey-3" placeholder="Answer 3 here" id="answer3" className=""/><br/>

          <input type="submit" id="submit-survey-button" value="SUBMIT"/>
        </form>
      </div>
    );
  }
});

module.exports = SurveyComponent;
