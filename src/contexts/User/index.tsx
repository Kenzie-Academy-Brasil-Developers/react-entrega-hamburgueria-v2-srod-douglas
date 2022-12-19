import { AxiosError } from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoaderDash } from "../../pages/Loader";
import { api } from "../../services/api";
import { iDefaultErrorApi, iFormLogin, iUserContextValues, iUserProviderProps } from "./types";

export const UserContext = createContext({} as iUserContextValues)

export const UserProvider = ({ children }: iUserProviderProps) => {
    const [user, setUser] = useState(false);
    const [userPersist, setUserPersist] = useState(true);
    const [loading, setLoading] = useState(false)
    const token: string | null = window.localStorage.getItem("@TK_US:")
    const navigate = useNavigate()

    const submitLogin: SubmitHandler<iFormLogin> = (data) => {
        (async()=>{
            try {
                const res = await api.post("login", data);
                setLoading(true)
                window.localStorage.setItem("@TK_US:", res.data.accessToken)
                window.localStorage.setItem("@ID_US:", res.data.user.id)
                setUser(true)
                setUserPersist(true)

                setTimeout(() => {
                    toast.success("Login efetuado!")
                    navigate('/dashboard')
                    setLoading(false)
                }, (4000));
            } catch (error) {
                const defaultError = error as AxiosError<iDefaultErrorApi>
                console.log(defaultError.response?.data)
                toast.error("Confira os dados e tente novamente")
                setUser(false)
                setUserPersist(false)
            }
        })(); 
    }

    useEffect(() => {
        const idUser = window.localStorage.getItem("@ID_US:")
        if(idUser !== null){
            (async() => {
                try {
                    await api.get(`users/${Number(idUser)}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(true)
                } catch (error) {
                    console.log(error)
                }
            })()
        }
    }, [])

    const logoutUser = () => {

        toast.success("Logout efetuado, estamos redirecionando ao login.")
        setLoading(true)
        setUser(false)
        window.localStorage.clear()
        setTimeout(() => {
            navigate('/login')
            setLoading(false)
        }, (4000));
    }

    if(loading){
        return <LoaderDash/>;
    }
    
    return(
        <UserContext.Provider value={{token, user, setUser, userPersist, setUserPersist, submitLogin, logoutUser, loading, setLoading}}>
            {children}
        </UserContext.Provider>
    )
}