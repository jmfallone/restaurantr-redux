// api.ts
import axios from 'axios';

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