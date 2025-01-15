import React, { createContext, useContext, useEffect, useState } from 'react';
import { signIn, signUp } from '@/api/api';
import { User, UserLogin } from '@/models/user';
import { jwtDecode } from 'jwt-decode';
import { getCookie } from '@/helpers/cookieParser';
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

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (data: UserLogin) => {
        await signIn(data);
        const decodedUser: Partial<User> = jwtDecode(document.cookie);
        setUser(decodedUser);
        setToken(getCookie());
        setIsAuthenticated(true);
        sessionStorage.setItem('user', JSON.stringify(decodedUser));
    };

    const register = async (data: User) => {
        const response = await signUp(data);
        setUser({
            firstName: response.data.user.firstName,
            lastName: response.data.user.lastName,
        });
        setToken(response.data.user.token);
        setIsAuthenticated(true);
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
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
