import type { LoginRequest, RegisterRequest, AuthResponse } from "@interfaces/authTypes";
import Api from "@services/api";

export const login = async (loginRequest: LoginRequest) => {
    const api = await Api.getInstance();
    try {
        const response = await api.post<LoginRequest, AuthResponse>(loginRequest, {url: "/auth/login"});
        api.authorization = response.data.token;
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
}

export const register = async (signupRequest: RegisterRequest) => {
    const api = await Api.getInstance();
    try {
        const response = await api.post<RegisterRequest, AuthResponse>(signupRequest, {url: "/auth/register"});
        api.authorization = response.data.token;
        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
}