import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../../services/api'




export const RegisterContext = createContext({})

export const RegisterProvider = ({ children }) => {

    const [userRegister, setUserRegister] = useState({})



    return(
        <RegisterContext value={{}}>
            {children}
        </RegisterContext>
    )
}
