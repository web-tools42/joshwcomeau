/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Authors from './index';

describe('Authors', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Authors />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
