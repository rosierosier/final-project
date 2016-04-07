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

    this.editor.save();
    var code = document.getElementById("editor").value;
    var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(code);
    document.getElementById("result").src = data_url;

    var textEditor = new models.TextEditor();
    textEditor.set("data", data_url);
    textEditor.save(null, {
      success: function(textEditor){
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectID: ' + textEditor.id);
      },
      error: function(textEditor, error){
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  },
  componentDidMount: function(){
    this.editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
        lineNumbers: true,
        mode: "xml"
    });
  },

  render: function(){
    return (
      <div onClick={this.handleSubmit} class="wrapper">
        <textarea id="editor"></textarea>
        <input type="submit" id="submit-text" value="SUBMIT"/>
      </div>
    );
  }
});

module.exports = EditorComponent;
