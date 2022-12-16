import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { formLoginSchema } from "./FormLoginSchema";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

interface iDefaultErrorApi{
    error: string
  }
  
  interface iFormLogin{
    email: string
    password: string
  }
  
  export const FormLogin = () => {
  
    const [dataRegister, setDataRegister] = useState({} as iFormLogin)
  
    const { register, handleSubmit, formState: { errors } } = useForm<iFormLogin>({
      mode: "onBlur",
      resolver: yupResolver(formLoginSchema)
    });
  
    const submitLogin: SubmitHandler<iFormLogin> = (data) => {
  
        (async()=>{
    
            try {
                
                const res = await api.post("login", data);
                console.log(res)
                console.log(res.data)
                console.log(res.data.accessToken)
                window.localStorage.setItem("@TK_US:", res.data.accessToken)
                console.log(res.data.user)
                toast.success("Login efetuado!")
              /* 
                redirecionar usuario para login
              */
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