var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


var WelcomeComponent = React.createClass({

  render: function(){
    return (
      <div>
        <div className="full-width-header"></div>

        <div id="header" className="row header">

          <div id="logo" className="col-md-4 col-sm-4 col-xs-12"></div>

          <div className="col-md-5 col-sm-5 col-xs-12 welcome text-center">
            <h1>Welcome!</h1>
            <p>User interface testing is essential to providing a user-friendly web design!
            If you have an eye for design and enjoy evaluations then Design Critic is the place for you!
            Designers, head on over to the "get feedback" side, and let&apos;s get started!</p>
          </div>

          <div id="home-header-login" className="col-md-2 col-sm-2 col-xs-12 text-center"></div>
        </div>

        {/* <div style={{clear:both}} /> */}
        <div className="container-fluid">
          <div id="welcome-packet">
            <div className="wrapper">
              <div className="row slogans">
                <div id="critic-slogan" className="text-center col-md-6 col-sm-6 col-xs-12">
                  <p>Provide evaluation for other designers&apos; projects!</p>
                  <a href="#critic" role="button" type="submit" id="give-critiques">GIVE CRITIQUES</a>
                </div>
                <div id="designer-slogan" className="text-center col-md-6 col-sm-6 col-xs-12">
                  <p>Want to know what people think of your designs?</p>
                  <a href="#designer" role="button" type="submit" id="get-feedback">GET FEEDBACK</a>
                </div>
              </div>

              <div id="welcome-image" className="row">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WelcomeComponent;
