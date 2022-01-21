/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductsListUnconnected } from './index';

describe('ProductsList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ProductsListUnconnected />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
