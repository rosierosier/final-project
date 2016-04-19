var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model');

var LogoutComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  displayForm: function(e){
    // e.preventDefault();

  },

  render: function(){
    return (
      <div id="header" onClick={this.displayForm}>
        <a href="index.html" id="log-out-header" role="button">LOG OUT</a>
      </div>
    )
  }
});

module.exports = LogoutComponent
