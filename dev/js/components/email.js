/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var foo = React.createClass({
  
    render:function(){
      return (
        <div>
          <input type="email" name="email" placeholder="EMail" />
        </div>
      )}
  });

module.exports = foo;