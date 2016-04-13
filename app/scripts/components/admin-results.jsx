console.log('Hello Admin Results View');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');
var Parse = require('parse');

var models = require('../models/model')

var AdminResultsComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    console.log('results view submit working');
    var SurveyData = new models.SurveyData();
    var query = new Parse.Query(SurveyData);
    query.find({
      success: function(results){
        for (var i = 0; i < results.length; i++){
          var surveyData = results[i];
          console.log("received result:", i, surveyData);
          document.getElementById("answer1").value = surveyData.get("answer1");
          document.getElementById("answer2").value = surveyData.get("answer2");
          document.getElementById("answer3").value = surveyData.get("answer3");
        }
      },
      error: function(results, error){
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" id="admin-results-button" value="VIEW RESULTS"/><br/>
        <label htmlFor="question1">Would you recommend our product (website) to a friend?</label><br/>
        <input type="text" name="answer1" placeholder="Answer 1 here" id="answer1" className=""/><br/>
        <label htmlFor="question2">How easy is our product (website) to use?</label><br/>
        <input type="text" name="answer2" placeholder="Answer 2 here" id="answer2" className=""/><br/>
        <label htmlFor="question3">What do you like least about our product (website)?</label><br/>
        <input type="text" name="answer3" placeholder="Answer 3 here" id="answer3" className=""/><br/>
      </form>
    );
  }
});

module.exports = AdminResultsComponent;
