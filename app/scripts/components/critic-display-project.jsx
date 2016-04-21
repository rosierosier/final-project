var Parse = require('parse');
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var models = require('../models/model')


var CriticDisplayComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  componentDidMount: function(e){
    var self = this;
    var router = this.props.router;
    var projectKey = router.projectId;
    // window.setCookie("currentProject", e.target.value);
    var projectUrl = e.target.getAttribute("data-url");
    // var projectKey = e.target.getAttribute("objectId");
    $('#critic-iframe').attr("src", projectUrl);
  },

  displaySurvey: function(){
  },

  render: function(){
    var self = this;
    return (
      <div id="wrapper">
        <div id="button" onClick={this.displaySurvey}>
          <input type="submit" id="feedback-button" className="invisible" value="GIVE FEEDBACK"/>
        </div>
        <iframe frameBorder="0" border="0" id="critic-iframe" className="invisible"></iframe>
      </div>
    );
  }
});

module.exports = CriticDisplayComponent;
