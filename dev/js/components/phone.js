/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Phone = React.createClass({
    handleClick:function(){
      console.log('phone number got clicked!');
    },
    render:function(){
      return (
        <div className="PhoneNumber">
        ￼￼<input type="text" placeholder="phoneNumber" name="phoneNumber" min="90000" max="99999"/>
        </div>
      )}
  });

module.exports = Phone;