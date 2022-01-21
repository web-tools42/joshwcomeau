/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import SampleBooks from './index';

describe('SampleBooks', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SampleBooks />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
