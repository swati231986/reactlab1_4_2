/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');
var email = require('./components/email.js');
var zipcode = require('./components/Roger.js');
var name = require('./components/name.js');
var phone = require('./components/phone.js');

var ContactForm = React.createClass({
    handleClick:function(){
      console.log('I got clicked!');
    },
    render:function(){
      return (
        <div className="wrapper">
        <form>
          <h1>My Contact Form</h1>
          <name/>
          <email/>
          <phone/>
          <zipcode/>
          <input type="submit" value="Submit">
          </form>
        </div>
      )}
  });

module.exports = ContactForm;
