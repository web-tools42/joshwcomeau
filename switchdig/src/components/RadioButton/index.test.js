/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import RadioButton from './index';

describe('RadioButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RadioButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
