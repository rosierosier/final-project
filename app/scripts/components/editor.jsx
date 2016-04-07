console.log('Hello Editor');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

var models = require('../models/model')

var EditorComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    console.log('editor submit working');
    // editor.save();
    // var code = document.getElementById("editor").value;
    // var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(code);
    // document.getElementById("result").src = data_url;
  },

  render: function(){
    // var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    //     lineNumbers: true,
    //     mode: "xml"
    // });
    return (
      <div onClick={this.handleSubmit} class="wrapper">
        <textarea id="editor"></textarea>
        <input type="submit" id="submit-text" value="SUBMIT"/>
        // <button id="submit-text">Submit</button>
      </div>
    );
  }
});

module.exports = EditorComponent;
