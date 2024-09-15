// api.ts
import axios from 'axios';
import { Review } from './types/Review';
import { camelizeKeys } from 'humps';

const API_URL = 'https://restaurantr-redux-3f6ddc178e50.herokuapp.com';

interface LoginData {
    username: string;
    password: string;
}

interface UserSignupData {
    username: string;
    password: string;
}

interface SignupData {
    user: UserSignupData;
}

interface AuthResponse {
    token: string;
}

export const login = async (data: LoginData): Promise<string> => {
    try {
        const response = await axios.post<AuthResponse>(`${API_URL}/login`, data);
        return response.data.token;
    } catch (error) {
        throw new Error('Login failed');
    }
};

export const signup = async (data: SignupData): Promise<string> => {
    try {
        const response = await axios.post<AuthResponse>(`${API_URL}/users`, data);
        return response.data.token;
    } catch (error) {
        throw new Error('Signup failed');
    }
};

export const setAuthToken = (token: string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const fetchAllReviews = async (): Promise<Review[]> => {
    try {
        const response = await axios.get<Review[]>(`${API_URL}/reviews`);
        return camelizeKeys(response.data) as Review[];
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            throw new Error(`Failed to fetch reviews: ${error.response.data.message || error.message}`);
        } else {
            // Something happened in setting up the request that triggered an Error
            throw new Error('An unexpected error occurred while fetching reviews');
        }
    }
};

export const fetchReviewById = async (id: number): Promise<Review> => {
    try {
        const response = await axios.get(`${API_URL}/reviews/${id}`);
        return camelizeKeys(response.data) as Review;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 404) {
                throw new Error(`Review with id ${id} not found`);
            }
            throw new Error(`Failed to fetch review: ${error.response?.data.message || error.message}`);
        } else {
            throw new Error('An unexpected error occurred while fetching the review');
        }
    }
};