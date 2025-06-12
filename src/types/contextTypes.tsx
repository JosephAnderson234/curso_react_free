export type contextType = {
    token: string | null;
    setToken: (token: string) => void;
    removeToken: () => void;
}