import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Rating } from 'react-native-ratings';
import { Review } from '../models/Review';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../AppNavigator';

type ReviewDetailsScreenProps = RouteProp<RootStackParamList, 'ReviewDetailsScreen'>;

type Props = {
  route: ReviewDetailsScreenProps;
};

const ReviewDetailsScreen: React.FC<Props> = ({ route }) => {
  const { review } = route.params;
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: review.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{review.title}</Text>
        <Text style={styles.subtitle}>{review.subtitle}</Text>
        <Text style={styles.restaurantName}>{review.restaurantName}</Text>
        <View style={styles.ratingContainer}>
          <Rating
            readonly
            startingValue={review.rating}
            imageSize={24}
            style={styles.rating}
          />
          <Text style={styles.ratingText}>{review.rating.toFixed(1)}</Text>
        </View>
        <Text style={styles.date}>
          Reviewed on {formatDate(review.createdAt)}
        </Text>
        {review.createdAt !== review.updatedAt && (
          <Text style={styles.date}>
            Updated on {formatDate(review.updatedAt)}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    marginRight: 8,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
});

export default ReviewDetailsScreen;