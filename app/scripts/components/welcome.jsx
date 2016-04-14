var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var WelcomeComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    console.log('welcome submit working');
  },

  render: function(){
    return (
      <div className="wrapper">
        <div className="row slogans">
          <div id="critic-slogan" className="text-center col-md-6 col-sm-6 col-xs-12">
            <p>Provide evaluation for other designer&apos;s projects!</p>
            <input type="submit" id="give-critiques" value="GIVE CRITIQUES"/>
          </div>
          <div id="designer-slogan" className="text-center col-md-6 col-sm-6 col-xs-12">
            <p>Want to know what people think of your designs?</p>
            <a href="admin.html" role="button" type="submit" id="get-feedback">GET FEEDBACK</a>
          </div>
        </div>

        <div id="welcome-image" className="row">
        </div>
      </div>
    );
  }
});

module.exports = WelcomeComponent;
