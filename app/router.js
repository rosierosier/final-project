var FooComponent = React.createClass({
  render : function() {
    return <div>foo</div>;
  }
});

var BarComponent = React.createClass({
  render : function() {
    return <div>bar</div>;
  }
});

var InterfaceComponent = React.createClass({
  componentWillMount : function() {
    this.callback = (function() {
      this.forceUpdate();
    }).bind(this);

    this.props.router.on("route", this.callback);
  },
  componentWillUnmount : function() {
    this.props.router.off("route", this.callback);
  },
  render : function() {
    if (this.props.router.current == "foo") {
      return <FooComponent />;
    }
    if (this.props.router.current == "bar") {
      return <BarComponent />;
    }
    return <div />;
  }
});

var Router = Backbone.Router.extend({
  routes : {
    "foo" : "foo",
    "bar" : "bar"
  },
  foo : function() {
    this.current = "foo";
  },
  bar : function() {
    this.current = "bar";
  }
});

var router = new Router();

React.renderComponent(
  <InterfaceComponent router={router} />,
  document.body
);

Backbone.history.start();
