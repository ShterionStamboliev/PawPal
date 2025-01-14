import React, { createContext, useContext, useState } from 'react';
import { signIn, signUp } from '@/api/api';
import { User, UserLogin } from '@/models/user';

interface AuthContextType {
    isAuthenticated: boolean;
    user: Partial<User> | null;
    token: string | null;
    login: (data: UserLogin) => Promise<void>;
    register: (data: User) => Promise<void>;
    // logout: () => Promise<void>;
}

type AuthProviderProps = {
    children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<Partial<User> | null>(null);
    const [token, setToken] = useState<string | null>(null);

    // const handleToken = (token: string) => {
    //     setToken(token);
    //     const decodedToken = jwtDecode(token);
    //     const data = decodedToken;
    //     console.log(data);
    //     sessionStorage.setItem('token', token);
    // };

    const login = async (data: UserLogin) => {
        const response = await signIn(data);
        setUser({
            firstName: response.data.user.firstName,
            lastName: response.data.user.lastName,
        });
        setToken(response.data.user.token);
        setIsAuthenticated(true);
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
    };

    const register = async (data: User) => {
        await signUp(data);
        setIsAuthenticated(true);
    };

    // const logoutUser = async () => {
    //     await logout();
    //     setIsAuthenticated(false);
    // };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, login, register, token, user }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
