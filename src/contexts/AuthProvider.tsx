import { AuthContext } from "./contexts";
import type { LoginRequest, RegisterRequest } from "@/types/authTypes";
import { login, register } from "@utils/api";
import { useUserStore } from "@utils/userStorage";

async function loginHandler(
    loginRequest: LoginRequest,
    setSession: (value: string) => void,
) {
    //esto realiza la llamada, desconmentar cuando se tenga el backend funcionando
    //const response = await login(loginRequest);
    //setSession(response.data.token);
    setSession("mocked-token"); // Mocked token for testing purposes
}

async function signupHandler(
    signupRequest: RegisterRequest,
    setSession: (value: string) => void,
) {
    const response = await register(signupRequest);
    setSession(response.data.token);
}

const AuthProvider = (props: { children: React.ReactNode }) => {
    const token = useUserStore((state) => state.token);
    const setToken = useUserStore((state) => state.setToken);

    return (
        <AuthContext.Provider
            value={{
                register: (signupRequest: RegisterRequest) => signupHandler(signupRequest, setToken),
                login: (loginRequest: LoginRequest) => loginHandler(loginRequest, setToken),
                logout: () => setToken(null),
                session: token,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;