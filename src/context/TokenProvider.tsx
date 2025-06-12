import { TokenContext } from "./contexts";
import { useState } from "react";

const TokenContextProvider = ({ children }: { children: React.ReactNode }) => {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString ? tokenString : null;
    }

    const [token, setToken] = useState<string | null>(getToken());

    const saveToken = (userToken: string) => {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    };

    const removeToken = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    const val = {
        token,
        setToken: saveToken,
        removeToken
    }

    return (
        <TokenContext.Provider value={val}>
            {children}
        </TokenContext.Provider>
    )
}

export default TokenContextProvider;