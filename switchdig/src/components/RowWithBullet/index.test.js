/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import RowWithBullet from './index';

describe('RowWithBullet', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RowWithBullet />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
