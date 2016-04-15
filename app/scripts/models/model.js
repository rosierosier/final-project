var Backbone = require('backbone');
var Parse = require('parse');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var SingleModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var ModelCollection = Backbone.Collection.extend({
  model: SingleModel,
  url: 'http://tiy-gvl-demo-day.herokuapp.com/rosiefinalproject',
});

var TextEditor = Parse.Object.extend("TextEditor");

var SurveyData = Parse.Object.extend("SurveyData");

var Project = Parse.Object.extend("Project");

module.exports = {
  'SingleModel': SingleModel,
  'ModelCollection': ModelCollection,
  'TextEditor': TextEditor,
  'SurveyData': SurveyData,
  'Project': Project
};
