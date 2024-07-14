import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

interface Review {
    title: string;
    subtitle: string;
    rating: number;
    image: string;
    id: string;
}



import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

interface ReviewsTimelineProps {
    reviews: Review[];
}

const ReviewListItem: React.FC<Review> = ({ title, subtitle, rating, image }) => {
    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Icon
                    key={i}
                    name={i <= rating ? 'star' : 'star-o'}
                    size={20}
                    color="#FFD700"
                />
            );
        }
        return stars;
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <View style={styles.ratingContainer}>{renderStars()}</View>
            </View>
        </View>)
  };

const ReviewsTimeline: React.FC<ReviewsTimelineProps> = ({ reviews }) => {
    const renderItem = ({ item }: { item: Review }) => (
        <ReviewListItem
            title={item.title}
            subtitle={item.subtitle}
            rating={item.rating}
            image={item.image}
            id={item.id}
        />
    );

    return (
        <FlatList
            data={reviews}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 2,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
    },
    ratingContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
});
export default ReviewsTimeline;