/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');
var Email = require('./email.js');
var Zipcode = require('./Roger.js');
var Name = require('./name.js');
var Phone = require('./phone.js');

var ContactForm = React.createClass({
    handleClick:function(){
      console.log('I got clicked!');
    },
    render:function(){
      return (
        <div className="wrapper">
        <form>
          <h1>My Contact Form</h1>
          <Name/> 
          <Email/>
          <Phone/> 
          <Zipcode/>
          <input type="submit" value="Submit"/>
          </form>
        </div>
      )}
  });

module.exports = ContactForm;
