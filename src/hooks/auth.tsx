import React, {
    useState,
    useContext,
    createContext,
    ReactNode,
    useEffect
} from "react";

import { api } from "../services/api";
import { database } from "../database";
import { User as UserModel } from "../database/models/User";

interface User {
    id: string;
    email: string;
    name: string;
    driver_license: string;
    avatar: string;
    token: string;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface ContextData {
    user: User;
    signIn: (credentials: SignInCredentials) => Promise<void>;
    signOut: () => Promise<void>;
}

interface ProviderProps {
    children: ReactNode
}

const AuthContext = createContext<ContextData>({} as ContextData);

function AuthProvider({ children }: ProviderProps) {
    const [data, setData] = useState<User>({} as User);

    async function signIn(credentials: SignInCredentials) {
        const response = await api.post('/sessions', credentials);

        const { user, token } = response.data;

        const defaults = api.defaults.headers as any;
        defaults.authorization = `Bearer ${user.token}`;

        await database.write(async () => {
            const userCollection = database.get<UserModel>('users');
            await userCollection.create(newUser => {
                newUser.user_id = user.id
                newUser.name = user.name
                newUser.email = user.email
                newUser.driver_license = user.driver_license
                newUser.avatar = user.avatar
                newUser.token = token
            });
        })

        setData({ ...user, token });
    }

    async function signOut() {
        try {
            await database.write(async () => {
                const userCollection = database.get<UserModel>('users');
                const user = await userCollection.find(data.id);
                await user.destroyPermanently();

                setData({} as User);
            })
        } catch (error) {
            throw new Error(error as any);
        }
    }

    useEffect(() => {
        async function loadData() {
            const userCollection = database.get<UserModel>('users');
            const response = await userCollection.query().fetch();

            if (response.length > 0) {
                const userData = response[0]._raw as unknown as UserModel;
                const defaults = api.defaults.headers as any;
                defaults.authorization = `Bearer ${userData.token}`;
                setData(userData);

                console.log(userData);
            }
        }

        loadData();
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, user: data, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };