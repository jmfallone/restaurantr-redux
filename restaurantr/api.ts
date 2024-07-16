import { Review } from "./types/Review";

// TODO: Make configurable before deployment :)
const API_BASE_URL = 'http://127.0.0.1:3000/api/v1';

// TODO: pagination? server & client side
export const fetchAllReviews = async (): Promise<Review[]> => {
    const response = await fetch(`${API_BASE_URL}/reviews`);
    if (!response.ok) {
        throw new Error('Failed to fetch reviews');
    }
    return response.json();
};

export const fetchReview = async (id: number): Promise<Review> => {
    const response = await fetch(`${API_BASE_URL}/reviews/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch review');
    }
    return response.json();
};