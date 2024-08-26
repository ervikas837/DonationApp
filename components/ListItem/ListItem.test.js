import {render, screen} from '@testing-library/react-native';
import React from 'react';
import ListItem from './ListItem';

test('should render list item', () => {
  const item = {
    title: 'Old age home',
    location: 'London',
    id: 1,
    categoryId: 2,
    image: '',
  };

  render(<ListItem item={item} />);

  let titleText = screen.getByText('Old age home');
  let locationText = screen.getByText('London');

  expect(titleText).toBeTruthy();
  expect(locationText).toBeTruthy();
});

test('Should render default image when no image is provided', () => {
  const item = {
    title: 'Old age home',
    location: 'London',
    id: 1,
    categoryId: 2,
  };

  render(<ListItem item={item} />);

  const defaultImageElement = screen.getByTestId('image');
  expect(defaultImageElement).toBeTruthy();
});
