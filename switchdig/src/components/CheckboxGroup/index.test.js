/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import CheckboxGroup from './index';

describe('CheckboxGroup', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CheckboxGroup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
