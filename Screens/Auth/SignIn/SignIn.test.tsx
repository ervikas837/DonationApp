import React, {useReducer} from 'react';
import {screen, render, fireEvent} from '@testing-library/react-native';
import SignIn from './SignIn';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store'; // Correct import for mock store
import {logIn, User as userReducer} from '../../../redux/reducers/User';
import {RootState} from '../../../redux/store';
import {useNavigation} from '@react-navigation/native';

// Create a mock store with middleware
const mockStore = configureMockStore();
// Create a mock store with initial state
const store = mockStore({
  user: {
    // Your initial state here
    firstName: '',
    lastName: '',
    userId: 0,
    isLoggedIn: false,
  },
});

// // Mock the useNavigation hook
// jest.mock('@react-navigation/native', () => ({
//   useNavigation: () => ({
//     navigate: jest.fn(),
//     goBack: jest.fn(),
//   }),
// }));

// Mock the useNavigation hook correctly
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

// Mock the useSelector hook
const mockDispatch = jest.fn();
const mockUseSelector = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: (selector: (state: RootState) => any) =>
    mockUseSelector(selector),
  useDispatch: () => mockDispatch,
}));

test('should render SignIn component and input fields', () => {
  mockUseSelector.mockImplementation(selector =>
    selector({
      user: {
        firstName: '',
        lastName: '',
        userId: 0,
        isLoggedIn: false,
      },
    }),
  );

  render(
    <Provider store={store}>
      <SignIn />
    </Provider>,
  );

  const signInElement = screen.getByText('SignIn');
  expect(signInElement).toBeTruthy();
});

test('should handle email input change', () => {
  render(
    <Provider store={store}>
      <SignIn />
    </Provider>,
  );

  const emailInput = screen.getByPlaceholderText('Enter Email');
  fireEvent.changeText(emailInput, 'test@example.com');
  console.log(emailInput);
  expect(emailInput.props.value).toBe('test@example.com');
});

test('should dispatch logIn action on Sign In button press', () => {
  render(
    <Provider store={store}>
      <SignIn />
    </Provider>,
  );
  const signInButton = screen.getByText('Sign In');
  fireEvent.press(signInButton);

  expect(mockDispatch).toHaveBeenCalled();
  expect(mockDispatch).toHaveBeenCalledWith(
    logIn({firstName: 'Jacky', lastName: 'Sharma', userId: 2}),
  );
});

test('should navigate to SignUp screen on SignUp link press', () => {
  const mockNavigate = jest.fn();
  (useNavigation as jest.Mock).mockReturnValue({navigate: mockNavigate});

  render(
    <Provider store={store}>
      <SignIn />
    </Provider>,
  );

  const signUpLink = screen.getByText('SignUp');
  fireEvent.press(signUpLink);
  expect(mockNavigate).toHaveBeenCalledWith('SignUp');
});
