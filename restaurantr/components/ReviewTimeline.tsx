// import React, { FC } from 'react';
// import { FlatList, ListRenderItem, View } from 'react-native';
// import { ListItem, Avatar } from 'react-native-elements';

// Define the type for the list items
interface Review {
    title: string;
    subtitle: string;
}


// import { StyleSheet, ViewStyle } from 'react-native';

// interface TimelineProps {
//     reviews: ReviewType[];
//     style: ViewStyle;
// }

// const renderItem: ListRenderItem<ReviewType> = ({ item }) => {
//     return (
//         <ListItem bottomDivider>
//             <ListItem.Content>
//                 <ListItem.Title>{item.title}</ListItem.Title>
//                 <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
//             </ListItem.Content>
//         </ListItem>
//     )
// }

// // const ReviewTimeline: FC<TimelineProps> = (props: TimelineProps) => {
// //     return (<View style={props.style}>
// //         {
// //             props.reviews.map((l: ReviewType, i: number) => (
// //                 <ListItem key={i} bottomDivider>
// //                     <ListItem.Content>
// //                         <ListItem.Title>{l.title}</ListItem.Title>
// //                         <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
// //                     </ListItem.Content>
// //                 </ListItem>
// //             ))
// //         }
// //     </View>)
// // };xs

// const ReviewTimeline: FC<TimelineProps> = (props: TimelineProps) => {
//     return (
//         <FlatList
//           data={props.reviews}
//           renderItem={renderItem}
//           keyExtractor={(item, index) => index.toString()}
//         />

//       )
// };


// export default ReviewTimeline;


import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

// interface Review {
//   id: string;
//   reviewer: string;
//   rating: number;
//   comment: string;
// }

interface ReviewsTimelineProps {
    reviews: Review[];
}

const ReviewsTimeline: React.FC<ReviewsTimelineProps> = ({ reviews }) => {
    const renderItem = ({ item }: { item: Review }) => (
        <View style={styles.reviewItem}>
            {/* <Text style={styles.reviewer}>{item.reviewer}</Text>
      <Text style={styles.rating}>Rating: {item.rating}</Text>
      <Text style={styles.comment}>{item.comment}</Text> */
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            }
        </View>
    );

    return (
        <FlatList
            data={reviews}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
    },
    reviewItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    reviewer: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rating: {
        fontSize: 14,
        color: '#666',
    },
    comment: {
        fontSize: 14,
        marginTop: 5,
    },
});

export default ReviewsTimeline;