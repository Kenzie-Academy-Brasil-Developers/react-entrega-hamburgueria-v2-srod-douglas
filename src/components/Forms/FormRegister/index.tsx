import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { api } from '../../../services/api';
import { yupResolver } from '@hookform/resolvers/yup'

import { formRegisterSchema } from './formRegisterSchema';
import { Link } from 'react-router-dom';

export const FormRegister = () => {

  const {register, handleSubmit, formState: { errors }} = useForm({
    mode: "onBlur",
    resolver: yupResolver(formRegisterSchema)
  });

  const submitRegister = data => {

    const { name, email, password } = data;
    const newData = { name, email, password };
  
    useEffect(() => {

      (async()=>{
          try {
              
              await api.post("users", newData);

              /* 
                Adicionar toast de sucesso
                redirecionar usuario para login
              */
          } catch (error) {

              console.log(error)
              console.log(error.data)
              console.log(error.data.message)
              console.log(error.data.status)


              /* 
                Adicionar toast de erro
              */


              if(error.data.message === "Password is too short"){
                /* 
                  Adicionar toast para senha curta
                */
              }
              if(error.data.message === "Email already exists"){
                /* 
                  Adicionar toast para email já existe
                */
              }

          }
      })();
    }, [])
  }

  return (
    <>
      <div>
        <h2>Cadastro</h2>
        <Link to="/login">Retornar para o login</Link>
      </div>
      <form onSubmit={handleSubmit(submitRegister)}>

        <fieldset>
        <label>Nome</label>
        <input id="name" placeholder='Insira seu nome' type="text" {...register("name")}/>
        </fieldset>

        <fieldset>
        <label>Email</label>
        <input id="email" placeholder='Insira seu email' type="email" {...register("email")} />
        </fieldset>

        <input id="password" placeholder='Senha' type="password" {...register("password")} />

        <input id="passwordConfirm" placeholder='Confirmar Senha' type="password" {...register("passwordConfirm")} />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}
