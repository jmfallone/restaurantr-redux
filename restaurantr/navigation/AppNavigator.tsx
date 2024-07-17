import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetailsScreen from '../screens/ReviewDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import ReviewsScreen from '../screens/ReviewsScreen';
import LoginScreen from '../screens/LoginScreen';
import { enableScreens } from 'react-native-screens';

enableScreens();

export type RootStackParamList = {
    LoginScreen: undefined;
    HomeScreen: undefined;
    ReviewsScreen: undefined;
    ReviewDetailsScreen: { reviewId: number };
};

const RootStackNavigator = createStackNavigator<RootStackParamList>();

function AppNavigator() {
    return (
        <NavigationContainer>
            <RootStackNavigator.Navigator initialRouteName="LoginScreen">
                <RootStackNavigator.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <RootStackNavigator.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />
                <RootStackNavigator.Screen
                    name="ReviewsScreen"
                    component={ReviewsScreen}
                />
                <RootStackNavigator.Screen
                    name="ReviewDetailsScreen"
                    component={ReviewDetailsScreen}
                />
            </RootStackNavigator.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;