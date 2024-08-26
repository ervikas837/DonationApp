import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';
import Home from './Home';
import useCategories from '../../hooks/useCategories';
import useItems from '../../hooks/useItems';

//Mock hooks
jest.mock('../../hooks/useCategories');
jest.mock('../../hooks/useItems');

const mockCategories = [
  {title: 'All', id: 1},
  {title: 'Orphnage', id: 2},
  {title: 'Social', id: 3},
  {title: 'Old Age homes', id: 4},
];

const mockItems = [
  {title: 'hello test', location: 'London', image: '', id: 1, categoryId: 1},
  {
    title: 'This is orphnage',
    location: 'London',
    image: '',
    id: 2,
    categoryId: 2,
  },
  {
    title: 'Social event',
    location: 'London',
    image: '',
    id: 3,
    categoryId: 3,
  },
];

const useCategoryMock = useCategories as jest.Mock;
const useItemsMock = useItems as jest.Mock;

describe('Home component', () => {
  beforeEach(() => {
    useCategoryMock.mockReturnValue({
      categories: mockCategories,
      loading: false,
      error: null,
    });

    useItemsMock.mockReturnValue({
      items: mockItems,
      isLoading: false,
      error: null,
    });
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks(); // Clear any mocked functions
  });

  test('Should render loading indicator when data is loading', async () => {
    useCategoryMock.mockReturnValue({
      categories: [],
      loading: true,
      error: null,
    });

    useItemsMock.mockReturnValue({
      items: [],
      isLoading: false,
      error: null,
    });

    render(<Home />);

    await waitFor(() =>
      expect(screen.getByTestId('activity-indicator')).toBeTruthy(),
    );
  });

  test('Should render error message when there is an error', async () => {
    useCategoryMock.mockReturnValue({
      categories: [],
      loading: false,
      error: new Error('Categories error'),
    });

    useItemsMock.mockReturnValue({
      items: [],
      isLoading: false,
      error: new Error('Items Error'),
    });

    render(<Home />);

    await waitFor(() =>
      expect(screen.getByText('Error Loading State')).toBeTruthy(),
    );
  });

  test('should render categories and list items when data is available', async () => {
    render(<Home />);

    //Check if categories are randered
    await waitFor(() => {
      expect(screen.getByText('Orphnage')).toBeTruthy();
      expect(screen.getByText('Social')).toBeTruthy();
    });

    //check if items are rendered
    await waitFor(() => {
      expect(screen.getAllByText('London')).toHaveLength(3);
      expect(screen.getByText('hello test')).toBeTruthy();
    });
  });

  test('should filter items based on selected category', async () => {
    render(<Home />);

    const categoryItem = screen.getByText('Social');
    fireEvent.press(categoryItem);

    await waitFor(() => {
      expect(screen.getByText('Social event')).toBeTruthy();
    });
  });
});
