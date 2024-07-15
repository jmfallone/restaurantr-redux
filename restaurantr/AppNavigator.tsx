import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetailsScreen from './screens/ReviewDetailsScreen';
import ReviewsTimeline from './components/ReviewsTimeline';

type RootStackParamList = {
    ReviewsTimeline: undefined;
    ReviewDetailsScreen: { review: Review };
};

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ReviewsTimeline" component={ReviewsTimeline} />
            <Stack.Screen name="ReviewDetailsScreen" component={ReviewDetailsScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;