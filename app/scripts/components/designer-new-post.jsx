var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var NewProjectComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    console.log('new-post submit working');
    $('.project-options').addClass('invisible');
    $('#admin-display-link').removeClass('invisible');
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" id="start-fresh-button" value="START FRESH!"/>
      </form>
    );
  }
});

module.exports = NewProjectComponent;
