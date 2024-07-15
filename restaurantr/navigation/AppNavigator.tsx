import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetailsScreen from '../screens/ReviewDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import ReviewsScreen from '../screens/ReviewsScreen';
import { Review, sampleReview } from '../types/Review';
import { enableScreens } from 'react-native-screens';

enableScreens();


export type RootStackParamList = {
    HomeScreen: undefined;
    ReviewsScreen: undefined;
    ReviewDetailsScreen: { review: Review };
};

const RootStackNavigator = createStackNavigator<RootStackParamList>();

function AppNavigator() {
    return (
        <NavigationContainer>
            <RootStackNavigator.Navigator>

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