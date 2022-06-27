import { createContext, useState } from "react";

interface AuthContextProps {
    authenticated: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
    authenticated: true,
    login: async () => { },
    logout: async () => { },
});

export function useAuth(): AuthContextProps {
    const [authenticated, setAuthenticated] = useState(true);

    const authProps: AuthContextProps = {
        authenticated,
        login() {
            return new Promise<void>((resolve) => {
                setAuthenticated(true);
                resolve();
            });
        },
        logout() {
            return new Promise<void>((resolve) => {
                setAuthenticated(false);
                resolve();
            });
        },
    };

    return authProps;
}