var Parse = require('parse');
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
    var surveyData = new models.SurveyData();
    surveyData.set("answer1", document.getElementById("answer1").value);
    surveyData.set("answer2", document.getElementById("answer2").value);
    surveyData.set("answer3", document.getElementById("answer3").value);
    surveyData.set("user", Parse.User.current());
    surveyData.set("username", Parse.User.current().get("username"));
    // surveyData.set("project", Parse.Object.);
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
      <div onSubmit={this.handleSubmit} className="wrapper">
        <div id="survey-info">
          <p>Please rate the following answers with 1 being least and 5 being greatest.</p>
        </div>
          <label htmlFor="question1">Would you recommend our product (website) to a friend?</label><br/>
          <form>
            <input type="radio" name="question1" value="1"><br/>1</input>
            <input type="radio" name="question1" value="2">2</input>
            <input type="radio" name="question1" value="3">3</input>
            <input type="radio" name="question1" value="4">4</input>
            <input type="radio" name="question1" value="5">5</input>
          </form>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default">1</button>
            <button type="button" className="btn btn-default">2</button>
            <button type="button" className="btn btn-default">3</button>
            <button type="button" className="btn btn-default">4</button>
            <button type="button" className="btn btn-default">5</button>
          </div>
          // <input type="text" name="survey-1" placeholder="Answer here" id="answer1" className=""/><br/>

          <label htmlFor="question2">How easy is our product (website) to use?</label><br/>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default">1</button>
            <button type="button" className="btn btn-default">2</button>
            <button type="button" className="btn btn-default">3</button>
            <button type="button" className="btn btn-default">4</button>
            <button type="button" className="btn btn-default">5</button>
          </div>
          // <input type="text" name="survey-2" placeholder="Answer 2 here" id="answer2" className=""/><br/>

          <label htmlFor="question3">What do you like least about our product (website)?</label><br/>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default">1</button>
            <button type="button" className="btn btn-default">2</button>
            <button type="button" className="btn btn-default">3</button>
            <button type="button" className="btn btn-default">4</button>
            <button type="button" className="btn btn-default">5</button>
          </div>
          // <input type="text" name="survey-3" placeholder="Answer 3 here" id="answer3" className=""/><br/>
          <input type="submit" id="submit-survey-button" value="SUBMIT"/>
      </div>
    );
  }
});

module.exports = SurveyComponent;
