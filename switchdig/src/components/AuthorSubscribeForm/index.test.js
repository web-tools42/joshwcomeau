/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import AuthorSubscribeForm from './index';

describe('AuthorSubscribeForm', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AuthorSubscribeForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
