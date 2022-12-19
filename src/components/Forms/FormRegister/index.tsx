import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { api } from '../../../services/api';
import { yupResolver } from '@hookform/resolvers/yup'

import { formRegisterSchema } from './formRegisterSchema';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { iFormRegister, iDefaultErrorApi } from './types';

export const FormRegister = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<iFormRegister>({
    mode: "onBlur",
    resolver: yupResolver(formRegisterSchema)
  });

  const submitRegister: SubmitHandler<iFormRegister> = (data) => {

    const { name, email, password } = data;
    const newData = { name, email, password };

    (async()=>{
      if(newData.password){
  
        try {
            
          await api.post("users", newData);
  
          toast.success("Cadastro realizado!")
          navigate("/login")
  
        } catch (error) {
          const defaultError = error as AxiosError<iDefaultErrorApi>
          console.log(defaultError.response?.data)
          toast.error("Este email já foi cadastrado.")
        }
      }
    })(); 
  }



   
  return (
    <>
      <div>
        <h2>Cadastro</h2>
        <a href="/login">Retornar para o login</a>
      </div>
      <form onSubmit={handleSubmit(submitRegister)}>

        <fieldset>
        <label>Nome</label>
        <input id="name" placeholder='Insira seu nome' type="text" {...register("name")}/>
        {errors.name && <p>{errors.name.message}</p>}
        </fieldset>

        <fieldset>
        <label>Email</label>
        <input id="email" placeholder='Insira seu email' type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        </fieldset>

        <input id="password" placeholder='Senha' type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <input id="passwordConfirm" placeholder='Confirmar Senha' type="password" {...register("passwordConfirm")} />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}

        <button type="submit">Cadastrar</button>
        
      </form>
    </>
  )
};
