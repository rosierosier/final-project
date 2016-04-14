var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var UserIframeComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  displaySurvey: function(e){
    e.preventDefault();
    console.log('toggle from iframe to survey');
    $('#survey').removeClass('invisible');
    $('#result').addClass('invisible');
    $('#feedback-button').addClass('invisible');
  },

  render: function(){
    // var AdminLink = new models.AdminLink();
    // var query = new Parse.Query(AdminLink);
    //
    // query.find({
    //   success: function(results){
    //     var project = $("#result");
    //
    //     for (var parseResultIndex = 0; parseResultIndex < results.length; parseResultIndex++) {
    //       var parseResponse = results[parseResultIndex];
    //         console.log("received result:", parseResultIndex, parseResponse);
    //       var AdminLinkCriticView = project.append('<div class="AdminLinkCriticView"></div>');
    //     }
    //   },
    // },
    return (
      <div id="wrapper">
        <div id="button" onClick={this.displaySurvey}>
          <input type="submit" id="feedback-button" className="invisible" value="GIVE FEEDBACK"/>
        </div>
        <iframe frameBorder="0" border="0" id="result" className="invisible"></iframe>
      </div>
    );
  }
});

module.exports = UserIframeComponent;
