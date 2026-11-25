import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { ReactNode } from "react";

interface AuthProps {
    authState?: {
        token: string | null;
        autenticado: boolean | null;
    };

    onRegister?: (email: string, password: string) => Promise<any>;
    onLogin?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

interface AuthProviderProps {
    children: ReactNode;
}

const TOKEN_KEY = "@wavepass:token";
export const API_URL = "linkaqui";

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [authState, setAuthState] = useState<{
    token: string | null;
    autenticado: boolean | null;
    }>({
        token: null,
        autenticado: null
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY)
            console.log("guardaro", token)
            if(token){
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
                setAuthState({
                    token: token,
                    autenticado: true
                });
            }else {
                setAuthState({
                    token: null,
                    autenticado: false
                });
            }
        }
    }, [])

    const register = async (email: string, password: string) =>{
        try{
            return await axios.post(`${API_URL}/users`, {email, password})
        }catch(e){
            return {error: true, msg: (e as any).response.data.msg}
        }
    }

    const login = async (email: string, password: string) =>{
        try{
            const result = await axios.post(`${API_URL}/auth`, {email, password})
            setAuthState({
                token: result.data.token,
                autenticado: true
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;

            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token)
            return result
            
        }catch(e){
            return {error: true, msg: (e as any).response.data.msg}
        }
    }
    const logout = async () => {
        await SecureStore.deleteItemAsync(TOKEN_KEY);

        axios.defaults.headers.common['Authorization'] = "";

        setAuthState({
            token: null,
            autenticado: false
        });
    }

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout : logout,
        authState
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
