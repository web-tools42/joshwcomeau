import React from 'react';

var Shuffle = React.createClass({
  render: function() {
    return (
      <button className="shuffle" onClick={this.props.shuffle}>Shuffle It!</button>
    );
  }
})

module.exports = Shuffle;