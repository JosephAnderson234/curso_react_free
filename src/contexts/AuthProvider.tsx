import { AuthContext } from "./contexts";
import type { LoginRequest, RegisterRequest } from "@interfaces/authTypes";
import { login, register } from "@services/auth/auth-req";
import { useUserStore } from "@utils/userStorage";
import Api from "@services/api";

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
    setSession(response.token);
}

const AuthProvider = (props: { children: React.ReactNode }) => {
    const token = useUserStore((state) => state.token);
    const setToken = useUserStore((state) => state.setToken);

    if (token){
        Api.getInstance().then((api)=>api.authorization=token);
    }
    
    return (
        <AuthContext.Provider
            value={{
                register: (signupRequest) => signupHandler(signupRequest, setToken),
                login: (loginRequest) => loginHandler(loginRequest, setToken),
                logout: () => {
                    setToken(null);
                },
                session: token
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;