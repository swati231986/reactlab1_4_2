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
            <input type="text" placeholder="Zip Code" name="zipcode"/>
        </div>
      )}
  });

module.exports = Roger;
