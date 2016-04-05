var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var SingleModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var ModelCollection = Backbone.Collection.extend({
  model: SingleModel,
  url: 'http://myrealtorapp.herokuapp.com/rosierealtorproject',
});

module.exports = {
  'SingleModel': SingleModel,
  'ModelCollection': ModelCollection
};
