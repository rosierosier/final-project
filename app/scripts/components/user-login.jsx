var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var isAdmin = ("" + window.location.href).indexOf("/admin.html") > 0;
var isCritic = ("" + window.location.href).indexOf("/critic.html") > 0;
var isIndex = ("" + window.location.href).indexOf("/index.html") > 0;
// alert("" + window.location.href + "\n\nisAdmin: " + isAdmin);

var UserLoginComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    console.log('submit working');
    Parse.User
      .logIn($('#login-email').val(), $('#login-user-password').val(), {
        success: function(user) {
          console.log("login", user);
          $('#user-login').addClass('invisible');
          $('#critic-signup-left').addClass('invisible');
          $('#admin-signup-left').addClass('invisible');

          $('#result').removeClass('invisible');
          $('#designer-new').removeClass('invisible');
          $('#designer-projects').removeClass('invisible');

          $('#feedback-button').removeClass('invisible');

          if(isCritic) {
            var innerQuery = new Parse.query(models.SurveyData());
            innerQuery.equalTo("user", Parse.User.current());
            var projectsNotAnswered = new Parse.Query(models.Project());
            projectsNotAnswered.doesNotMatchQuery("project", innerQuery);
            projectsNotAnswered.find({
              success: function(projectsNotAnswered) {
                console.log("success for innerQuery:", projectsNotAnswered);
                // comments now contains the comments for posts without images.
              },
              error: function(projectsNotAnswered, error){
                console.log(error);
              }
            });
          };
          $('#critic-projects').removeClass('invisible');

        },
        error: function(user, error) {
          // The login failed. Check error to see why.
        }
      });
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="login-email" placeholder="Email Address" id="login-email" className="" value="admin@example.com"/><br/>
        <input type="password" name="login-user-password" placeholder="Password" id="login-user-password" className="" value="12345"/><br/>
        <input type="reset" id="cancel-button" value="CANCEL"/>
        <input type="submit" id="log-in-button" value="LOG IN"/>
      </form>
    );
  }
});

module.exports = UserLoginComponent;
