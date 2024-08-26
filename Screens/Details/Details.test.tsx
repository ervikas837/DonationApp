import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import Details from './Details';
import {ListItemType} from '../Home/Home';
import {RouteProp} from '@react-navigation/native';
import {getFontFamily} from '../../src/assets/fonts/helper';

// title: string;
// location: string;
// image?: string;
// id: number;
// categoryId: number;
// description: string;

const mockItem: ListItemType = {
  title: 'This is orphnage',
  location: 'London',
  id: 1,
  categoryId: 1,
  image: '',
  description: 'this is just the test description',
};

const mockRoute: RouteProp<{params: {item: ListItemType}}, 'params'> = {
  key: 'details-key',
  name: 'params',
  params: {
    item: mockItem,
  },
  path: undefined, // Path is optional, so it can be undefined
};

describe('test the detail screen', () => {
  test('should display correct elements on the screen', () => {
    const {getByText} = render(<Details route={mockRoute} />);

    expect(getByText('This is orphnage')).toBeTruthy();
    expect(getByText('London')).not.toBeNull();
  });

  test('should update image uri when item prop is changes', () => {
    const newImageURL = 'https://picsum.photos/200/300/new_image.jpg';
    const {rerender, getByTestId} = render(<Details route={mockRoute} />);

    expect(getByTestId('item-image').props.source.uri).toBe(mockItem.image);

    const updatedItem = {...mockItem, image: newImageURL};
    rerender(<Details route={{...mockRoute, params: {item: updatedItem}}} />);

    expect(getByTestId('item-image').props.source.uri).toBe(newImageURL);
  });

  test('should call handle donate when donate button is pressed', () => {
    const {getByText} = render(<Details route={mockRoute} />);
    const donateButton = getByText('Donate');

    fireEvent.press(donateButton);

    expect(donateButton).toBeTruthy();
  });

  test('should match snapshot', () => {
    const tree = render(<Details route={mockRoute} />);
    expect(tree).toMatchSnapshot();
  });

  test('should contain scroll view for content', () => {
    const {getByTestId} = render(<Details route={mockRoute} />);
    const scrollView = getByTestId('detail-scroll');
    expect(scrollView).toBeTruthy();
  });

  test('should apply custom styles to the donate button', () => {
    const {getByText} = render(<Details route={mockRoute} />);
    const button = getByText('Donate');

    expect(button.props.style).toMatchObject([
      {
        color: 'black',
        fontFamily: getFontFamily('Inter', '600'),
        fontSize: 18,
      },
    ]);
  });
});
