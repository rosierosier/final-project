var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model');
// var FormComponent = require('./form.jsx');

console.log('Hello Listing');

var ImageItself = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div className="image-caption-div">
        <div className="image-div">
          <img src={this.props.model.get('image')}/>
        </div>
        <div className="caption-div">
          <p>
            {this.props.model.get('caption')}
          </p>
        </div>
      </div>
    );
  }
});

var ImageListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  displayForm: function(e){
    console.log('displaying form');
    e.preventDefault();
    $('#form').toggle('medium', function(){
      $('#form').removeClass('invisible');
    });
  },

  render: function(){
    var imageList = this.props.collection.map(function(model){
      return (
        <ImageItself model={model} key={model.id} />
        );
    });

    return (
      <div className="wrapper">
        <div id="header" onClick={this.displayForm}>
          <button><p>+</p></button>
        </div>
        <div id="form" className="invisible">
          <FormComponent collection={this.props.collection}/>
        </div>
        <div className="image-wrapper">
          {imageList}
        </div>
      </div>
    )
  }
});

module.exports = ImageListing;
