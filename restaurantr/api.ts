import { Review } from "./types/Review";
import { auth } from './firebase';

// TODO: Make configurable before deployment :)
const API_BASE_URL = 'http://127.0.0.1:3000/api/v1';

const getAuthorizationHeader = async () => {
    const user = auth.currentUser;
    if (!user) {
        throw new Error("No user is currently signed in.");
    }
    const token = await user.getIdToken();
    return { Authorization: `Bearer ${token}` };
};

// TODO: pagination? server & client side
export const fetchAllReviews = async (): Promise<Review[]> => {
    const headers = await getAuthorizationHeader();
    const response = await fetch(`${API_BASE_URL}/reviews`, {
        headers: headers,
    });
    if (!response.ok) {
        throw new Error('Failed to fetch reviews');
    }
    return response.json();
};

export const fetchReview = async (id: number): Promise<Review> => {
    const headers = await getAuthorizationHeader();
    const response = await fetch(`${API_BASE_URL}/reviews/${id}`, {
        headers: headers,
    });
    if (!response.ok) {
        throw new Error('Failed to fetch review');
    }
    return response.json();
};