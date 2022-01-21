/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from './index';

describe('NotFound', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
