import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { iDashboardContextValues, iDashboardProviderProps, idataProducts } from "./types";

export const DashboardContext = createContext({} as iDashboardContextValues)

export const DashboardProvider = ({ children }: iDashboardProviderProps) => {

    const token: string | null = window.localStorage.getItem("@TK_US:");
    const [dataProducts, setDataProducts] = useState([] as idataProducts[])

    const getProducts = async () => {

        if(token !== null){

            try {
                const res = await api.get("products", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setDataProducts(res.data)
                console.log(dataProducts)
                
            } catch (error) {
                console.log(error)
            }
        }
    }
    
    useEffect(() => {

        getProducts()
    }, [])

    return(
        <DashboardContext.Provider value={{ getProducts, dataProducts }}>
            {children}
        </DashboardContext.Provider>
    )
}