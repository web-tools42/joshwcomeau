/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import SampleBook from './index';

describe('SampleBook', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SampleBook />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
