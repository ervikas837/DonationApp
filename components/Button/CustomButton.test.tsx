import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import CustomButton from './CustomButton';

test('On passing title should be there on the screen and on pressing onPress should called', () => {
  const mockFunction = jest.fn();
  render(<CustomButton title="SignIn" onPress={mockFunction} />);

  expect(screen.getByText('SignIn')).toBeTruthy();
  const buttonElement = screen.getByText('SignIn');
  fireEvent.press(buttonElement);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});
