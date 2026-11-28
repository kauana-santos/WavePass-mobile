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

    onRegister?: (
        nome: string,
        email: string,
        cpf: string,
        telefone: string,
        dataNascimento: string,
        senha: string
    ) => Promise<any>;
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
                setAuthState({
                    token: null,
                    autenticado: false
                });
            }
        };

        loadToken();
    }, []);

    const register = async (nome: string, email: string, cpf: string, telefone: string, dataNascimento: string, senha: string) => {
        try {
            const dadosCadastro = {
                nome: nome.trim(),
                email: email.trim().toLowerCase(),
                cpf: cpf.replace(/\D/g, "") || null,
                telefone: telefone.replace(/\D/g, "") || null,
                dataNascimento: dataNascimento.trim() || null,
                senha
            };

            const result = await axios.post(`${API_URL}/api/wavepass/usuario/registerClient`, dadosCadastro);

            return result.data;

        } catch (e: any) {
            return {
                error: true,
                msg: e.response?.data?.message || e.response?.data?.mensagem || e.response?.data?.msg || "Erro ao realizar cadastro."
            };
        }
    };

    const login = async (email: string, senha: string) => {
        try {
            const result = await axios.post(`${API_URL}/api/wavepass/usuario/login`, { email, senha });

            const token = result.data.token;

            if (!token) {
                throw new Error("Token não retornado pelo servidor.");
            }

            await saveToken(token);

            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setAuthState({
                token,
                autenticado: true
            });

            return result.data;

        } catch (e: any) {
            return {
                error: true,
                msg: e.response?.data?.message || e.response?.data?.mensagem || "Erro ao realizar login."
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
