/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import './App.less';

import React from 'react';
import invariant from 'react/lib/invariant';
import AppActions from '../../actions/AppActions';
import NavigationMixin from './NavigationMixin';
import AppStore from '../../stores/AppStore';
import NotFoundPage from '../NotFoundPage';
import Hero from '../Hero';
import Shuffle from '../Shuffle';

var frameworkNames = ['Artichoke', 'Jeez', 'Walrus', 'Monopoly', 'Pizza', 'Fingers', 'Stringcheese', 'RedBull'];
var frameworkAdjectives = ['superheroic', 'hyper-vigilant', 'fantastical', 'bewildering', 'lackadaisical', 'delightful', 'robust', 'colossal'];
var frameworkDescriptions = [
  "revolutionizes multi-dimensional data distribution through coaxial binding techniques, so you can do more with less.",
  "supercharges your development IDE by adding symbols everywhere, whether you want them or not.",
  "bypasses the DOM bottleneck by manipulating your users's eyeballs with 3D autostereoscopy instead.",
  "obediently organizes your assets into logical partitions for hassle-free asset pipelining.",
  "adds <marquee> tags haphazardly for maximum attention-grabbing potential. ROI+++++.",
  "provides cheery fortune cookie alert() popups to keep your visitors positive and engaged.",
];

var Application = React.createClass({

  mixins: [NavigationMixin],

  propTypes: {
    path: React.PropTypes.string.isRequired,
    onSetTitle: React.PropTypes.func.isRequired,
    onSetMeta: React.PropTypes.func.isRequired,
    onPageNotFound: React.PropTypes.func.isRequired
  },

  // Initialize with null data. On creation, we'll fetch data from the server.
  getInitialState: function() {
    return {data: {
      name: null,
      adjective: null,
      description: null
    }};
  },

  // Called when the component gets mounted, and when the user hits shuffle.
  fetchFrameworkData: function() {
    // Replace me with an API call to the server.
    this.setState({
      data: {
        name:         _.sample(frameworkNames),
        adjective:    _.sample(frameworkAdjectives),
        description:  _.sample(frameworkDescriptions)
      }
    });
  },

  componentDidMount: function() {
    this.fetchFrameworkData();
  },

  render: function() {
    var page = AppStore.getPage(this.props.path);
    invariant(page !== undefined, 'Failed to load page content.');
    this.props.onSetTitle(page.title);

    if (page.type === 'notfound') {
      this.props.onPageNotFound();
      return React.createElement(NotFoundPage, page);
    }

    return (
      /* jshint ignore:start */
      <div className="App">
        <Hero data={this.state.data} />
        <Shuffle shuffle={this.fetchFrameworkData} />
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Application;
