import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { ReactNode } from "react";
import { Platform } from "react-native";

interface AuthProps {
    authState?: {
        token: string | null;
        autenticado: boolean | null;
    };

    onRegister?: (email: string, senha: string) => Promise<any>;
    onLogin?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

interface AuthProviderProps {
    children: ReactNode;
}

const TOKEN_KEY = "wavepass_token";
export const API_URL = "https://wavepass-api.onrender.com";

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
};
const getToken = async () => {
    if (Platform.OS === "web") {
        return localStorage.getItem(TOKEN_KEY);
    }

    return await SecureStore.getItemAsync(TOKEN_KEY);
};

const saveToken = async (token: string) => {
    if (Platform.OS === "web") {
        localStorage.setItem(TOKEN_KEY, token);
    } else {
        await SecureStore.setItemAsync(TOKEN_KEY, token);
    }
};

const removeToken = async () => {
    if (Platform.OS === "web") {
        localStorage.removeItem(TOKEN_KEY);
    } else {
        await SecureStore.deleteItemAsync(TOKEN_KEY);
    }
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
            try {
                const token = await getToken();

                console.log("Guardado:", token);

                if (token) {
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

                    setAuthState({
                        token: token,
                        autenticado: true
                    });
                } else {
                    setAuthState({
                        token: null,
                        autenticado: false
                    });
                }

            } catch (error) {
                console.log("Erro ao recuperar token:", error);

                setAuthState({
                    token: null,
                    autenticado: false
                });
            }
        };

        loadToken();
    }, []);

    const register = async (email: string, senha: string) => {
        try {
            return await axios.post(`${API_URL}/api/wavepass/usuario/registerClient`, {
                email,
                senha
            });

        } catch (e: any) {
            return {
                error: true,
                msg: e.response?.data?.msg || "Erro ao realizar cadastro."
            };
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const result = await axios.post(
                `${API_URL}/api/wavepass/auth/`,
                {
                    email,
                    password
                }
            );

            setAuthState({
                token: result.data.token,
                autenticado: true
            });

            axios.defaults.headers.common["Authorization"] =
                `Bearer ${result.data.token}`;

            await saveToken(result.data.token);

            return result;

        } catch (e: any) {
            return {
                error: true,
                msg: e.response?.data?.msg || "Erro ao realizar login."
            };
        }
    };

    const logout = async () => {
        await removeToken();

        delete axios.defaults.headers.common["Authorization"];

        setAuthState({
            token: null,
            autenticado: false
        });
    };

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
