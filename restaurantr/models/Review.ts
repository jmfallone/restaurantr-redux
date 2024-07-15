export interface Review {
    title: string;
    subtitle: string;
    rating: number;
    image: string;
    id: string;
    restaurantId: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    restaurantName: string;
}

export const sampleReview: Review = {
    title: "Great Food!",
    subtitle: "Loved the ambiance",
    rating: 5,
    image: "image_url",
    id: "1",
    restaurantId: "101",
    userId: "501",
    createdAt: "2023-10-01T12:00:00Z",
    updatedAt: "2023-10-01T12:00:00Z",
    restaurantName: "The Great Restaurant"
};