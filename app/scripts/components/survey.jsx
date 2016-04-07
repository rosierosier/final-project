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
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="question1">Would you recommend our product (website) to a friend?</label><br/>
        <input type="text" name="survey-1" placeholder="Answer here" id="survey" className=""/><br/>
        <label htmlFor="question2">How easy is our product (website) to use?</label><br/>
        <input type="text" name="survey-2" placeholder="Answer 2 here" id="survey-1" className=""/><br/>
          <label htmlFor="question3">What do you like least about our product (website)?</label><br/>
          <input type="text" name="survey-3" placeholder="Answer 3 here" id="survey-1" className=""/><br/>
        <input type="submit" id="submit-survey-button" value="SUBMIT"/>
      </form>
    );
  }
});

module.exports = SurveyComponent;
