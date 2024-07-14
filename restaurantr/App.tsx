import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReviewTimeline from './components/ReviewTimeline';

const exampleReviews = [
  {
    title: 'Great food!',
    subtitle: 'The pasta was amazing and the service was excellent.',
  },
  {
    title: 'Not bad',
    subtitle: 'The ambiance was nice, but the food was just okay.',
  },
  {
    title: 'Terrible experience',
    subtitle: 'The food was cold and the staff was rude.',
  },
];


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ReviewTimeline reviews={exampleReviews} style={styles.timeline} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeline: {
    flex: 1,
  },
});
