import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import CategoryItem from './CategoryItem';

test('Social category should exist', () => {
  const categoryItem = {
    title: 'Social',
    id: 1,
  };
  const mockOnSelect = jest.fn();
  render(<CategoryItem item={categoryItem} onSelect={mockOnSelect} />);

  const element = screen.getByText('Social');
  expect(element).toBeTruthy();

  fireEvent.press(element);
  expect(mockOnSelect).toHaveBeenCalledTimes(1);
});
