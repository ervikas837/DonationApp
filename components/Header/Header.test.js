import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Header from './Header';

describe('test the header component', () => {
  it('title present in the header component', () => {
    render(<Header name="Vikas" />);

    let title = screen.getByText(`Hello Vikas`);

    expect(title).not.toBeNull();
    expect(title).toBeOnTheScreen();
  });

  it('image is present on the screen', () => {
    render(<Header name="Vikas" />);

    let image = screen.getByTestId('account-icon');
    expect(image).toBeTruthy();
  });
});
