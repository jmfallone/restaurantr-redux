// api.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000';  // Replace with your actual API URL

interface LoginData {
    username: string;
    password: string;
}

interface SignupData extends LoginData {
    email: string;
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
        const response = await axios.post<AuthResponse>(`${API_URL}/signup`, data);
        return response.data.token;
    } catch (error) {
        throw new Error('Signup failed');
    }
};

export const setAuthToken = (token: string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};