import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../../services/api'


export interface iRegisterProviderProps{
    children: React.ReactNode
}

export const RegisterContext = createContext({})

export const RegisterProvider = ({ children }: iRegisterProviderProps) => {

    /* const [userRegister, setUserRegister] = useState({}) */



    return(
        <RegisterContext.Provider value={{}}>
            {children}
        </RegisterContext.Provider>
    )
}
