
var React = require('react');
var ReactDOM = require('react-dom');

var NameRecord = React.createClass({
  render:function(){
    return (
    	<div className="NameRecord">
    		<input type="Text" placeholder="Name" name="Name"/>
    		</div>
    )}
});

module.exports = NameRecord;	