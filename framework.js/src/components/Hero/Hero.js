import React from 'react';

var Hero = React.createClass({
  render: function() {
    console.log(this.props)
    return (
      <section className="hero">
        <h3 className="introducing">Introducing</h3>
        <h1 className="framework-big-title underlined">
          <span className="framework-name">{this.props.data.name}</span>
          <span className="dotjs">.js</span>
        </h1>
        <div className="framework-details">
          <h4>The <span className="framework-adjective underlined">{this.props.data.adjective}</span> framework that</h4>
          <h5 className="framework-description">{this.props.data.description}</h5>
        </div>
      </section>
    );
  }
})

module.exports = Hero;