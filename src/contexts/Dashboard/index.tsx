import { createContext, useEffect } from "react";
import { api } from "../../services/api";
import { iDashboardProviderProps } from "./types";

export const DashboardContext = createContext({})

export const DashboardProvider = ({ children }: iDashboardProviderProps) => {

    const token: string | null = window.localStorage.getItem("@TK_US:");
    useEffect(() => {

        (async() => {
            if(token){
                try {
                    const res = await api.get("products", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    console.log(res.data)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    )()
    }, [])
    
    return(
        <DashboardContext.Provider value={{}}>
            { children }
        </DashboardContext.Provider>
    )
}