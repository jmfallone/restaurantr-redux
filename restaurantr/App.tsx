import React from 'react';
import ReviewsScreen from './screens/ReviewsScreen';
import HomeScreen from './screens/HomeScreen';

enableScreens();

const Stack = createStackNavigator();

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Reviews"
          component={ReviewsScreen}
          options={{ title: 'Reviews' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;