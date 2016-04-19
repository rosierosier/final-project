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
    console.log('results view submit working', this.state.currentProject);
    var SurveyData = new models.SurveyData();
    var query = new Parse.Query(SurveyData);
    query.equalTo("project", this.state.currentProject);
    query.find({
      success: function(results){
        function oneToThreeFromAnswer(textResponse) {
          if (textResponse == "1") {
            return 1;
          } else if (textResponse == "2") {
            return 2;
          } else if (textResponse == "3") {
            return 3;
          } else {
            return 0
          }
        };
        // for (var i = 0; i < results.length; i++){
        //   var surveyData = results[i];
        //   document.getElementById("answer1").value = surveyData.get("answer1");
        //   document.getElementById("answer2").value = surveyData.get("answer2");
        //   document.getElementById("answer3").value = surveyData.get("answer3");
        // }
        var surveyAnswers = $("#admin-results");

        for (var parseResultIndex = 0; parseResultIndex < results.length; parseResultIndex++) {
          var parseCriticResponse = results[parseResultIndex];
          console.log("received result:", parseResultIndex, parseCriticResponse);

          var criticHeaderAndResponse = surveyAnswers.append("<div class=\"criticHeaderAndResponse criticHeaderAndResponse-" + parseResultIndex + "\"></div>");
          $(".criticHeaderAndResponse-" + parseResultIndex, criticHeaderAndResponse).append("<div class=\"criticHeader\"></div>").text(parseCriticResponse.get("username"));

          var criticResponse = criticHeaderAndResponse.append("<div class=\"criticResponse criticResponse-" + parseResultIndex + "\"></div>");

          var numericFunctionality = oneToThreeFromAnswer(parseCriticResponse.get("answer1"));
          var numericAttractiveness = oneToThreeFromAnswer(parseCriticResponse.get("answer2"));
          var numericUsability = oneToThreeFromAnswer(parseCriticResponse.get("answer3"));

          $(".criticResponse-" + parseResultIndex, criticResponse).append("<div class=\"criticQuestionsAndAnswers\"><table><tr><td class=\"criticQuestion\">Functionality</td><td class=\"criticAnswer\">" + numericFunctionality + "</td></tr>"
          + "<tr><td class=\"criticQuestion\">Attractiveness</td><td class=\"criticAnswer\">" + numericAttractiveness + "</td></tr>"
          + "<tr><td class=\"criticQuestion\">Usability</td><td class=\"criticAnswer\">" + numericUsability + "</td></tr></table></div>");

          //TODO: better handling for when answers are incomplete or unexpected values
          var functionalityConclusion = Math.floor(numericFunctionality);// + (0.5 * numericUsability));
          var attractivenessConclusion = Math.floor(numericAttractiveness);// + (0.5 * numericUsability));

          $(".criticResponse-" + parseResultIndex, criticResponse).append("<div class=\"criticSummary functionality" + functionalityConclusion + " attractiveness" + attractivenessConclusion + "\"></div>");2
          $(".criticResponse-" + parseResultIndex, criticResponse).append("<div style=\"clear: both;\"></div>");
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
      </form>

    );
  }
});

module.exports = AdminResultsComponent;
