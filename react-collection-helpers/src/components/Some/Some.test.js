/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
/* eslint-enable */

import Some from '../Some';

import { clearWhitespace } from '../../helpers/test.helpers';

const { describe, it } = global;


describe('Some', () => {
  it('renders without incident', () => {
    const wrapper = shallow(
      <Some
        collection={[]}
        predicate={() => true}
      >
        {() => {}}
      </Some>
    );

    expect(wrapper).to.be.ok;
  });

  it('returns null if none of the items return true', () => {
    const collection = [
      { id: 'a', name: 'Apple', isLoaded: false },
      { id: 'b', name: 'Banana', isLoaded: false },
      { id: 'c', name: 'Carrot', isLoaded: false },
    ];
    const isLoaded = item => item.isLoaded;

    const wrapper = shallow(
      <Some collection={collection} predicate={isLoaded}>
        {({ id, name }) => <div key={id}>{name}</div>}
      </Some>
    );

    expect(wrapper.html()).to.equal(null);
  });

  it('renders fallback content if provided, when collection is invalid', () => {
    const collection = [
      { id: 'a', name: 'Apple', isLoaded: false },
      { id: 'b', name: 'Banana', isLoaded: false },
      { id: 'c', name: 'Carrot', isLoaded: false },
    ];
    const isLoaded = item => item.isLoaded;

    const wrapper = shallow(
      <Some
        collection={collection}
        predicate={isLoaded}
        fallback={<div>Not Available</div>}
      >
        {({ id, name }) => <div key={id}>{name}</div>}
      </Some>
    );

    expect(wrapper.html()).to.equal('<div>Not Available</div>');
  });

  it('defaults to an is-true predicate', () => {
    const collection = [
      { id: 'a', name: 'Apple', isLoaded: false },
      { id: 'b', name: 'Banana', isLoaded: false },
      { id: 'c', name: 'Carrot', isLoaded: false },
    ];

    const wrapper = shallow(
      <Some collection={collection}>
        {({ id, name }) => <div key={id}>{name}</div>}
      </Some>
    );

    expect(wrapper.html()).to.equal(clearWhitespace(`
      <div>
        <div>Apple</div>
        <div>Banana</div>
        <div>Carrot</div>
      </div>
    `));
  });

  it('renders null when no collection is provided', () => {
    const collection = [];
    const isLoaded = item => item.isLoaded;

    const wrapper = shallow(
      <Some collection={collection} predicate={isLoaded}>
        {({ id, name }) => <div key={id}>{name}</div>}
      </Some>
    );

    expect(wrapper.html()).to.equal(null);
  });

  it('renders the fallback when no collection is provided', () => {
    const collection = [];
    const isLoaded = item => item.isLoaded;
    const fallback = <span>Fallback</span>;

    const wrapper = shallow(
      <Some collection={collection} predicate={isLoaded} fallback={fallback}>
        {({ id, name }) => <div key={id}>{name}</div>}
      </Some>
    );

    expect(wrapper.html()).to.equal('<span>Fallback</span>');
  });

  it('renders the fallback when no collection AND no predicate is provided', () => {
    const collection = [];
    const fallback = <span>Fallback</span>;

    const wrapper = shallow(
      <Some collection={collection} fallback={fallback}>
        {({ id, name }) => <div key={id}>{name}</div>}
      </Some>
    );

    expect(wrapper.html()).to.equal('<span>Fallback</span>');
  });

  it('renders the content when one item in the collection is valid', () => {
    const collection = [
      { id: 'a', name: 'Apple', isLoaded: true },
      { id: 'b', name: 'Banana', isLoaded: false },
      { id: 'c', name: 'Carrot', isLoaded: false },
    ];
    const isLoaded = item => item.isLoaded;

    const wrapper = shallow(
      <Some
        collection={collection}
        predicate={isLoaded}
        fallback={<div>Not Available</div>}
      >
        {({ id, name }) => <div key={id}>{name}</div>}
      </Some>
    );

    expect(wrapper.html()).to.equal(clearWhitespace(`
      <div>
        <div>Apple</div>
        <div>Banana</div>
        <div>Carrot</div>
      </div>
    `));
  });
});
