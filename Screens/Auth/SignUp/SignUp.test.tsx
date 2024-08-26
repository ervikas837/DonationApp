import {screen, render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from './SignUp';
import thunk from 'redux-thunk';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

//const Stack = createNativeStackNavigator();

const mockStore = configureMockStore();

// Create a mock store with initial state
const store = configureMockStore()({
  user: {
    firstName: '',
    lastName: '',
    userId: 0,
    isLoggedIn: false,
  },
});

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}));

test('should have elements on the screen', () => {
  const {getByText} = render(<SignUp />);
  const signUpElement = getByText('Sign Up');

  expect(signUpElement).toBeTruthy();
});
