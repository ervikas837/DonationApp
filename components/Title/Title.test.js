import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Title from './Title';

test('Title Component', () => {
  const testHeading = 'test heading';
  render(<Title heading={testHeading} />);

  const title = screen.getByText(testHeading);
  expect(title).toBeOnTheScreen();
});
