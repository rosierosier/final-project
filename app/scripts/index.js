console.log('Hello World!');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var FormComponent = require('./components/form.jsx');
var models = require('./models/model')

var newModelCollection = new models.ModelCollection();


ReactDOM.render(
  // <ImageListing collection={newImageCollection}/>,
  document.getElementById('app')
);

// newImageCollection.fetch();
