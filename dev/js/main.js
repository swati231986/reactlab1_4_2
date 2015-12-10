var App = require('./components/app.js');
/** @jsx React.DOM */
 var React = require('react');
 var ReactDOM = require('react-dom');
 
 var ContactForm = require('./components/contactform.js');

 var ContactFormBox = React.createClass({
  render: function() {
    return (
      <div className="contactform-box">
        <ContactForm />
      </div>
    );
  }
});

ReactDOM.render(
  <ContactFormBox />,
  document.getElementById('main')
);