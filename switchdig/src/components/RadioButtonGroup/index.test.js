/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import RadioButtonGroup from './index';

describe('RadioButtonGroup', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RadioButtonGroup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
