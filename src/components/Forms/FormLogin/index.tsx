import { useForm } from "react-hook-form";
import { formLoginSchema } from "./FormLoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { iFormLogin } from "./types";
import { useContext } from "react";
import { UserContext } from "../../../contexts/User";

export const FormLogin = () => {
    
    const { submitLogin } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm<iFormLogin>({
        mode: "onBlur",
        resolver: yupResolver(formLoginSchema)
    });
    
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