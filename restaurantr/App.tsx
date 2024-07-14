import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ReviewTimeline from './components/ReviewTimeline';

const exampleReviews = [
  {
    id: '1',
    title: 'Great Product!',
    subtitle: 'Exceeded my expectations',
    rating: 5,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '2',
    title: 'Good Value',
    subtitle: 'Worth the price',
    rating: 4,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '3',
    title: 'Average Experience',
    subtitle: 'It was okay, nothing special',
    rating: 3,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '4',
    title: 'Not Satisfied',
    subtitle: 'Did not meet my expectations',
    rating: 2,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '5',
    title: 'Terrible Service',
    subtitle: 'Very disappointed',
    rating: 1,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '6',
    title: 'Excellent Quality',
    subtitle: 'Highly recommend',
    rating: 5,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '7',
    title: 'Fantastic!',
    subtitle: 'Loved it',
    rating: 5,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '8',
    title: 'Pretty Good',
    subtitle: 'Would buy again',
    rating: 4,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '9',
    title: 'Just Okay',
    subtitle: 'Not bad, not great',
    rating: 3,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '10',
    title: 'Disappointed',
    subtitle: 'Expected more',
    rating: 2,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '11',
    title: 'Awful Experience',
    subtitle: 'Would not recommend',
    rating: 1,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '12',
    title: 'Superb!',
    subtitle: 'Exceeded all expectations',
    rating: 5,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '13',
    title: 'Good Purchase',
    subtitle: 'Happy with the product',
    rating: 4,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '14',
    title: 'Mediocre',
    subtitle: 'Nothing special',
    rating: 3,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '15',
    title: 'Not Great',
    subtitle: 'Could be better',
    rating: 2,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '16',
    title: 'Terrible',
    subtitle: 'Very unhappy',
    rating: 1,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '17',
    title: 'Amazing Quality',
    subtitle: 'Highly recommend',
    rating: 5,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '18',
    title: 'Good Deal',
    subtitle: 'Worth the money',
    rating: 4,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '19',
    title: 'So-So',
    subtitle: 'It was fine',
    rating: 3,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '20',
    title: 'Not Worth It',
    subtitle: 'Would not buy again',
    rating: 2,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '21',
    title: 'Horrible',
    subtitle: 'Very disappointed',
    rating: 1,
    image: 'https://via.placeholder.com/60',
  },
];


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ReviewTimeline reviews={exampleReviews} />
      <StatusBar style="auto" />
    </SafeAreaView >
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