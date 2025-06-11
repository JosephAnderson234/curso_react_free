import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_API_BACKEND || "http://localhost:3000";

export const getPokePages = async (page: number, limit: number = 50) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/pokemon`, {
            params: {
                offset: (page - 1) * limit,
                limit
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Pokemon pages:", error);
        throw error;
    }
}

