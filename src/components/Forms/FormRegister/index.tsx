import { SubmitHandler, useForm } from 'react-hook-form';
import { api } from '../../../services/api';
import { yupResolver } from '@hookform/resolvers/yup'
import { formRegisterSchema } from './formRegisterSchema';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { iFormRegister, iDefaultErrorApi } from './types';
import { StyledFormRegister } from './styles';
import { ButtonRegister } from '../../../styles/buttons';
import { TextError, TitleBold2 } from '../../../styles/typography';

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
        <TitleBold2>Cadastro</TitleBold2>
        <Link to="/login">Retornar para o login</Link>
      </div>
      <StyledFormRegister noValidate autoComplete='off' onSubmit={handleSubmit(submitRegister)}>
        <fieldset>
          <label>Nome</label>
          <input id="name" placeholder='Insira seu nome' type="text" {...register("name")} required/>
          {errors.name && <TextError>{errors.name.message}</TextError>}
        </fieldset>
        <fieldset>
          <label>Email</label>
          <input id="email" placeholder='Insira seu email' type="email" {...register("email")} required />
          {errors.email && <TextError>{errors.email.message}</TextError>}
        </fieldset>
        <input id="password" placeholder='Senha' type="password" {...register("password")} required />
        {errors.password && <TextError>{errors.password.message}</TextError>}
        <input id="passwordConfirm" placeholder='Confirmar Senha' type="password" {...register("passwordConfirm")} required />
        {errors.passwordConfirm && <TextError>{errors.passwordConfirm.message}</TextError>}
        <ButtonRegister type="submit">Cadastrar</ButtonRegister>
      </StyledFormRegister>
    </>
  )
};
