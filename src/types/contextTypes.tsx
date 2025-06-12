export type contextToken = {
    token: string | null;
    setToken: (token: string) => void;
    removeToken: () => void;
}