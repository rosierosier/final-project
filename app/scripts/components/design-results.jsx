var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model');

var DesignResultsComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {'critiques': []};
  },
  componentDidMount: function(){
    var self = this;
    var router = this.props.router;
    var projectKey = this.props.router.projectId;
    console.log(projectKey);

    var SurveyData = new models.SurveyData();
    var query = new Parse.Query(SurveyData);

    query.equalTo("projectKey", projectKey);

    query.find({
      success: function(results){
        console.log(results);
        self.setState({'critiques': results});
      },
      error: function(results, error){
        console.log(error.message);
      }
    });
  },
  render: function(){
    var self = this;

    if(self.state.critiques.length == 0){
      return (
        <div id="no-critiques" className="col-md-12 col-sm-12 col-xs-12 text-center">
          <p>You don&apos;t have any critiques for this project yet!</p>
        </div>
      );
    }

    var surveyAnswers = self.state.critiques.map(function(critique, index){

      var numericFunctionality = parseInt(critique.get("answer1") || 0);
      var numericAttractiveness = parseInt(critique.get("answer2") || 0);
      var numericUsability = parseInt(critique.get("answer3") || 0);

      return (
        <div key={critique.id}>
          <div className={"criticHeaderAndResponse criticHeaderAndResponse-" + index}>
            <div className="criticHeader"></div>
          </div>


          <div className={"criticResponse criticResponse-" + index}>
            <div className="criticQuestionsAndAnswers">
              <table>
                <tbody>
                  <tr>
                    <td className="criticQuestion">Functionality</td>
                    <td className="criticAnswer">{numericFunctionality}</td>
                  </tr>
                  <tr>
                    <td className="criticQuestion">Attractiveness</td>
                    <td className="criticAnswer">{numericAttractiveness}</td>
                  </tr>
                  <tr>
                    <td className="criticQuestion">Usability</td>
                    <td className="criticAnswer">{numericUsability}</td>
                  </tr>

                </tbody>

              </table>
            </div>

            <div
              className={"criticSummary functionality" + numericFunctionality + " attractiveness" + numericAttractiveness}
            />
            <div style={{"clear": "both"}} />
          </div>
        </div>
      );

    });

    return (
      <div id="admin-results">
        {surveyAnswers}
      </div>
    );
  }
});

module.exports = DesignResultsComponent;
