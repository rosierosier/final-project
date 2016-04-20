var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model');

var SelectProjectComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  handleSubmit: function(e){
    e.preventDefault();
    // this.setState({"currentProject": e.target.projectKey});
    console.log("currentProject:", this.props.project.objectId);
    $('.project-options').addClass('invisible');
    $('#admin-results').removeClass('invisible');

    var SurveyData = new models.SurveyData();
    var query = new Parse.Query(SurveyData);
    var project = this.props.project;
    var projectKey = this.props.project.objectId;

    console.log("hello select project world: ", project);
    console.log("this.props.project.objectId", this.props.project.objectId);

    query.equalTo("projectKey", projectKey);

    // query.include("this.props.project.objectId", projectKey);

    query.find({
      success: function(results){
        console.log("in query projectKey", projectKey);
        console.log("results.id", results.id);
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
        }

        var surveyAnswers = $("#admin-results");

        for (var parseResultIndex = 0; parseResultIndex < results.length; parseResultIndex++) {
          var parseCriticResponse = results[parseResultIndex];
          console.log("received result:", parseResultIndex, parseCriticResponse);

          var criticHeaderAndResponse = surveyAnswers.append("<div class=\"criticHeaderAndResponse criticHeaderAndResponse-" + parseResultIndex + "\"></div>");
          $(".criticHeaderAndResponse-" + parseResultIndex, criticHeaderAndResponse).append("<div class=\"criticHeader\"></div>").text(parseCriticResponse.get("username"));
          $(".criticHeaderAndResponse-" + parseResultIndex, criticHeaderAndResponse).append("<div class=\"criticHeader\"></div>").text(parseCriticResponse.get("projectName"));

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

          $(".criticResponse-" + parseResultIndex, criticResponse).append("<div class=\"criticSummary functionality" + functionalityConclusion + " attractiveness" + attractivenessConclusion + "\"></div>");
          $(".criticResponse-" + parseResultIndex, criticResponse).append("<div style=\"clear: both;\"></div>");
        }
      },
      error: function(results, error){
        console.log(error.message);
      }
    });
  },
  render: function(){
    var project = this.props.project;
    var projectKey = this.props.project.objectId;
    console.log("hello select project world in render: ", project);
    return <button onClick={this.handleSubmit} projectKey={projectKey} value={projectKey}>{project.projectName}</button>;
  }
});

module.exports = SelectProjectComponent;
