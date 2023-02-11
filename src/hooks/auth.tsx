import React, {
    useState,
    useContext,
    createContext,
    ReactNode
} from "react";
import { api } from "../services/api";

interface User {
    id: string;
    email: string;
    name: string;
    driver_license: string;
    avatar: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface ContextData {
    user: User;
    signIn: (credentials: SignInCredentials) => Promise<void>;
}

interface ProviderProps {
    children: ReactNode
}

const AuthContext = createContext<ContextData>({} as ContextData);

function AuthProvider({ children }: ProviderProps) {
    const [data, setData] = useState<AuthState>({} as AuthState);

    async function signIn(credentials: SignInCredentials) {
        const response = await api.post<AuthState>('/sessions', credentials);

        const { token, user } = response.data;
        
        const defaults = api.defaults.headers as any;
        defaults.authorization = `Bearer ${token}`;

        setData({ token, user });
    }

    return (
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };