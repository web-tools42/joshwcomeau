var Playground = React.createClass({
  getInitialState: function() {
    return { data: { dotWidth: 220, dotHeight: 150} }
  },
  updateDot: function(dot) {
    var dotProps = this.state.data;
    var newDotProps = _.merge(dotProps, dot);
    console.log(dot);

    this.setState({data: newDotProps});
  },
  render: function() {
    var dotData = {
      width:  this.state.data.dotWidth,
      height: this.state.data.dotHeight
    };
    return (
      <div className="playground">
        <Dot data={dotData} />
        <DotForm initialData={dotData} onDotSubmit={this.updateDot} />
      </div>
    );
  }
});

var Dot = React.createClass({
  render: function() {
    return (
      <div className="dot" style={this.props.data}></div>
    );
  }
});

var DotForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    
    this.props.onDotSubmit({
      dotWidth:  this.refs.width.getDOMNode().value,
      dotHeight: this.refs.height.getDOMNode().value
    });
  },
  render: function() {
    return (
      <form className="dotForm">
        <input type="text" placeholder="width" ref="width" value={this.props.initialData.width} onChange={this.handleSubmit}   /> 
        <input type="text" placeholder="height" ref="height" value={this.props.initialData.height} onChange={this.handleSubmit} />
      </form>
    );
  }
});


React.render(
  <Playground />,
  document.getElementById('content')
);