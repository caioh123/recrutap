import React, {useContext, createContext, useState, ReactNode, useEffect} from 'react'
import { useAuth } from './AuthContext';

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext(undefined)

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {

    useEffect(() => {
        
    }, [])
    return (
        <UserContext.Provider
            value={value}
        >
            {children}
        </UserContext.Provider>
    )
}