console.log('Hello Form');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/image')

$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
};

var FormComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    var formData = $(e.target).serializeObject();
      console.log('submit is working:', formData);
    this.getCollection().create(formData);
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="image" placeholder="Image URL" id="image-url" className=""/><br/>
        <input type="text" name="caption" placeholder="Image Caption" id="caption" className=""/><br/>
        <input type="reset" id="cancel-button" value="CANCEL"/>
        <input type="submit" id="add-image-button" value="ADD IMAGE"/>
      </form>
    );
  }
});

module.exports = FormComponent;
