import {Routes} from './Routes';
import {RootStackParamList} from '../types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import SignIn from '../Screens/Auth/SignIn/SignIn';
import SignUp from '../Screens/Auth/SignUp/SignUp';
import Details from '../Screens/Details/Details';

const Stack = createNativeStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.SignIn}>
      <Stack.Screen name={Routes.SignIn} component={SignIn} />
      <Stack.Screen name={Routes.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Details} component={Details} />
    </Stack.Navigator>
  );
};
