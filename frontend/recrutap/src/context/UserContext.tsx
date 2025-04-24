import React, {useContext, createContext, useState, ReactNode} from 'react'

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext(undefined)