console.log('Hello Survey');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var SurveyComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    console.log('survey submit working');
    // var surveyInput = {
    //   'text': hello world!
    // };
    var surveyData = new models.SurveyData();
    surveyData.set("answer1", document.getElementById("answer1").value);
    surveyData.set("answer2", document.getElementById("answer2").value);
    surveyData.set("answer3", document.getElementById("answer3").value);
    surveyData.save(null, {
      success: function(surveyData){
        // Execute any logic that should take place after the object is saved.
        alert('Thank you for completing this survey!');
        $('#survey').addClass('invisible');
      },
      error: function(surveyData, error){
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="question1">Would you recommend our product (website) to a friend?</label><br/>
        <input type="text" name="survey-1" placeholder="Answer here" id="answer1" className=""/><br/>
        <label htmlFor="question2">How easy is our product (website) to use?</label><br/>
        <input type="text" name="survey-2" placeholder="Answer 2 here" id="answer2" className=""/><br/>
          <label htmlFor="question3">What do you like least about our product (website)?</label><br/>
          <input type="text" name="survey-3" placeholder="Answer 3 here" id="answer3" className=""/><br/>
        <input type="submit" id="submit-survey-button" value="SUBMIT"/>
      </form>
    );
  }
});

module.exports = SurveyComponent;
