import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { formLoginSchema } from "./FormLoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { iFormLogin, iDefaultErrorApi } from "./types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DashboardContext } from "../../../contexts/Dashboard";

export const FormLogin = () => {
    const navigate = useNavigate()
    const { setToken } = useContext(DashboardContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iFormLogin>({
        mode: "onBlur",
        resolver: yupResolver(formLoginSchema)
    });

    const submitLogin: SubmitHandler<iFormLogin> = (data) => {
        (async()=>{
            try {
                const res = await api.post("login", data);
                window.localStorage.setItem("@TK_US:", res.data.accessToken)
                setToken(res.data.accessToken)
                toast.success("Login efetuado!")
                navigate("/dashboard")

            } catch (error) {
                const defaultError = error as AxiosError<iDefaultErrorApi>
                console.log(defaultError.response?.data)
                toast.error("Confira os dados e tente novamente")
            }
        })(); 
    }
    
    return (
        <>
            <h2>
                Login
            </h2>
            <form onSubmit={handleSubmit(submitLogin)}>

                <fieldset>
                <label>Nome</label>
                <input id="email" placeholder='Insira seu email' type="text" {...register("email")}/>
                {errors.email && <p>{errors.email.message}</p>}
                </fieldset>

                <fieldset>
                <label>Senha</label>
                <input id="password" placeholder='Insira sua senha' type="password" {...register("password")} />
                {errors.password && <p>{errors.password.message}</p>}
                </fieldset>

                <button type="submit">Logar</button>
                
            </form>

            <span>
                Crie sua conta para saborear muitas delícias e matar sua fome!
            </span>
            <button>
                Cadastrar
            </button>
        </>
    )
};