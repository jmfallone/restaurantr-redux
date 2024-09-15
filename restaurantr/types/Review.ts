export interface Review {
    id: number;
    creatorUsername: string;
    dateCreated: string;
    score: number;
    title: string;
    description: string;
    storeId: number;
    images: string[];
    createdAt: string;
    updatedAt: string;
}

export const sampleReview: Review = {
    id: 1,
    creatorUsername: "foodie123",
    dateCreated: "2024-09-15T14:30:00.000Z",
    score: 9,
    title: "Exceptional Dining Experience",
    description: "The ambiance was perfect for a romantic dinner. We tried the chef's special, and it was a culinary masterpiece. The flavors were perfectly balanced, and the presentation was Instagram-worthy. The staff was attentive without being intrusive. Highly recommend the truffle pasta and the chocolate lava cake for dessert!",
    storeId: 42,
    images: [
        "https://example.com/images/restaurant-interior.jpg",
        "https://example.com/images/truffle-pasta.jpg",
        "https://example.com/images/chocolate-lava-cake.jpg"
    ],
    createdAt: "2024-09-15T14:30:00.000Z",
    updatedAt: "2024-09-15T14:30:00.000Z"
};