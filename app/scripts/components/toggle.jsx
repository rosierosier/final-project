var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


var ToggleComponent = React.createClass({
  render: function(){
    var button = (
      <a id="log-in-header" href="#designer/signup">
        SIGN UP
      </a>
    );
    if(this.props.router.current == "signup"){
      button = (
        <a id="log-in-header" href="#designer/login">
          LOG IN
        </a>
      );
    }

    return (
      <div id="header">
        {button}
      </div>
    )
  }
});

module.exports = ToggleComponent
