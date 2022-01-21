/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Toggle from './index';

describe('Toggle', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Toggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
