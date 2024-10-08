import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { Rating } from 'react-native-ratings';
import { Review } from '../types/Review';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { fetchReviewById } from '../api';

type ReviewDetailsScreenProps = RouteProp<RootStackParamList, 'ReviewDetailsScreen'>;

type Props = {
  route: ReviewDetailsScreenProps;
};

const { width } = Dimensions.get('window');

const ReviewDetailsScreen: React.FC<Props> = ({ route }) => {
  const { reviewId } = route.params;
  const [review, setReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReview = async () => {
      try {
        const fetchedReview = await fetchReviewById(reviewId);
        setReview(fetchedReview);
      } catch (err) {
        setError('Failed to load review. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadReview();
  }, [reviewId]);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <View style={styles.contentContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.contentContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!review) {
    return (
      <View style={styles.contentContainer}>
        <Text>No review found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {review.images && review.images.length > 0 && (
        <ScrollView horizontal pagingEnabled style={styles.imageScrollView}>
          {review.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </ScrollView>
      )}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{review.title}</Text>
        <Text style={styles.creatorUsername}>by {review.creatorUsername}</Text>
        <View style={styles.ratingContainer}>
          <Rating
            readonly
            startingValue={review.score}
            imageSize={24}
            style={styles.rating}
          />
          <Text style={styles.ratingText}>{review.score.toFixed(1)}</Text>
        </View>
        <Text style={styles.description}>{review.description}</Text>
        <Text style={styles.date}>
          Reviewed on {formatDate(review.dateCreated)}
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
  imageScrollView: {
    height: 200,
  },
  image: {
    width: width,
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
  creatorUsername: {
    fontSize: 16,
    color: '#666',
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
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
});

export default ReviewDetailsScreen;