console.log('Hello Editor');
var Parse = require('parse');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

// <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/codemirror/CodeMirror/master/lib/codemirror.css">
// <script type="text/javascript" src="https://cdn.rawgit.com/codemirror/CodeMirror/master/lib/codemirror.js"></script>
// <script type="text/javascript" src="https://cdn.rawgit.com/codemirror/CodeMirror/master/mode/xml/xml.js"></script>
// <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
// <script type="text/javascript" src="https://cdn.rawgit.com/carlo/jquery-base64/master/jquery.base64.min.js"></script>

var models = require('../models/model')

var EditorComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  handleSubmit: function(e){
    e.preventDefault();
    console.log('editor submit working');

    this.editor.save();
    var code = document.getElementById("editor").value;
    // var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(code);
    // document.getElementById("result").src = data_url;

    var textEditor = new models.TextEditor();
    console.log("preparing to save : ", code);
    textEditor.set("data", code);
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
  handleLink: function(e){
    e.preventDefault();
    console.log("admin post link working");
    var adminUrl = document.getElementById("admin-link").value;
    var adminLink = new models.AdminLink();
    adminLink.set("url", adminUrl);
    adminLink.save({
      success: function(adminLink){
        alert('New object created for admin link');
      },
      error: function(adminLink, error){
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  },
  render: function(){
    return (
      <div className="wrapper">
        <div onSubmit={this.handleLink}>
          <label htmlFor="embed-link"></label><br/>
          <input type="text" name="admin-link" placeholder="Embed link here" id="admin-link" className=""/><br/>
          <input type="submit" id="submit-url" value="POST LINK"/>
        </div>
        <div onSubmit={this.handleSubmit}>
          <textarea id="editor"></textarea>
          <input type="submit" id="submit-text" value="SUBMIT"/>
          <iframe frameBorder="0" border="0" id="result"></iframe>
        </div>
      </div>
    );
  }
});

module.exports = EditorComponent;
