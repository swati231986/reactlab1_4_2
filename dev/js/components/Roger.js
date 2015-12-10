/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Roger = React.createClass({
    handleClick:function(){
      console.log('Roger got clicked!');
    },
    render:function(){
      return (
        <div className="roger">
        ￼￼<input type="number" placeholder="Zip Code" name="zipcode" min="90000" max="99999"/>
        </div>
      )}
  });

module.exports = Roger;