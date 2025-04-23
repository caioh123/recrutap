import React, {useContext, createContext, useState, useEffect, ReactNode} from 'react'

interface AuthContextType {
    token: string | null;
    login: (newToken: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
    children: ReactNode;
}


export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [token, setToken] = useState<string | null>(null)

    const login = (newToken: string)=> {
        setToken(newToken)
        localStorage.setItem("tokenjwt", newToken)
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem("tokenjwt")
    }

    const isAuthenticated = !!token;

    useEffect(() => {
        const tokenjwt = localStorage.getItem("tokenjwt")
        setToken(tokenjwt || null)
    }, [])

    const value: AuthContextType = {
        token,
        login,
        isAuthenticated,
        logout
    }


    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}