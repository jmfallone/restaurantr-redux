import React from 'react';
import { Image, View, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Review } from '../types/Review';
import { RootStackParamList } from '../navigation/AppNavigator';


interface ReviewsTimelineProps {
    reviews: Review[];
}


const ReviewListItem: React.FC<Review> = ({ title, subtitle, rating, image, id, restaurantName }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const renderStars = () => {
        return Array.from({ length: 5 }, (_, i) => (
            <Icon
                key={i}
                name={i < rating ? 'star' : 'star-o'}
                size={20}
                color="#FFD700"
            />
        ));
    };

    const handlePress = () => {
        navigation.navigate('ReviewDetailsScreen', { reviewId: id });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                    <View style={styles.ratingContainer}>{renderStars()}</View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const ReviewsTimeline: React.FC<ReviewsTimelineProps> = ({ reviews }) => {
    const renderItem = ({ item }: { item: Review }) => (
        <ReviewListItem {...item} />
    );

    return (
        <FlatList
            data={reviews}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
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
    restaurantName: {
        fontSize: 14,
        color: '#777',
        marginBottom: 5,
    },
});

export type { ReviewsTimelineProps };
export default ReviewsTimeline;