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

    var surveyData = new models.SurveyData();
    // console.log("survey props", this.props);
    var projectKey = this.props.router.projectId;

    surveyData.set("answer1", document.getElementById("answer1").value);
    surveyData.set("answer2", document.getElementById("answer2").value);
    surveyData.set("answer3", document.getElementById("answer3").value);
    surveyData.set("user", Parse.User.current());
    surveyData.set("username", Parse.User.current().get("username"));
    surveyData.set("projectKey", projectKey);
    surveyData.save({
      success: function(surveyData){
        alert('Thank you for completing this survey!');
        // console.log("getting parent:", surveyData.get("parent"));
        // this.props.router.navigate('critic/project', {trigger: true});
      },
      error: function(surveyData, error){
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  },

  render: function(){
    // var project = this.props.project;
    // console.log(project);
    // var projectKey = this.props.project.id;
    // console.log(projectKey);
    // console.log(this.props.get("projectId"));
    console.log("survey render", this.props.router);

    return (
      <div>
        <div id="survey-info">
          <p>Please rate the functionality, attractiveness, and usability of the website with 1 being the least and 3 being the greatest.</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="question1">How functional is the website?</label><br/>
          <input type="text" name="survey-1" placeholder="Functionality answer" id="answer1" className=""/><br/>

          <label htmlFor="question2">How attractive is this website?</label><br/>
          <input type="text" name="survey-2" placeholder="Attractiveness answer" id="answer2" className=""/><br/>

          <label htmlFor="question3">How usable is this website?</label><br/>
          <input type="text" name="survey-3" placeholder="Usability answer" id="answer3" className=""/><br/>

          <input type="submit" id="submit-survey-button" value="SUBMIT"/>
        </form>
      </div>
    );
  }
});

module.exports = SurveyComponent;
