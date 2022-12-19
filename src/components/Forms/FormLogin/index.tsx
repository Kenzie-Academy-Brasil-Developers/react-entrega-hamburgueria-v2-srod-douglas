import { useForm } from "react-hook-form";
import { formLoginSchema } from "./FormLoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { iFormLogin } from "./types";
import { useContext } from "react";
import { UserContext } from "../../../contexts/User";
import { ButtonLogin, ButtonRegister } from "../../../styles/buttons";
import { FontLabelInput, FontRegular1, TitleBold1 } from "../../../styles/typography";

import { StyledForm } from "./styles";

export const FormLogin = () => {
    
    const { submitLogin } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm<iFormLogin>({
        mode: "onBlur",
        resolver: yupResolver(formLoginSchema)
    });
    
    return (
        <>
            <div>                
                <TitleBold1>
                    Login
                </TitleBold1>
            </div>
            <StyledForm onSubmit={handleSubmit(submitLogin)}>

                <fieldset className="animate__animated animate__fadeInRight animate__slow">
                    <FontLabelInput>
                        Nome
                    </FontLabelInput>
                    <input id="email" placeholder='Insira seu email'        type="text" {...register("email")}/>
                    {errors.email && <p>{errors.email.message}</p>}
                </fieldset>

                <fieldset className="animate__animated animate__fadeInRight animate__slower">
                    <FontLabelInput>
                        Senha
                    </FontLabelInput>
                    <input id="password" placeholder='Insira sua senha' type="password" {...register("password")} />
                    {errors.password && <p>{errors.password.message}</p>}
                </fieldset>

                <ButtonLogin type="submit">Logar</ButtonLogin>
                
            </StyledForm>

            <FontRegular1>
                Crie sua conta para saborear muitas delícias e matar sua fome!
            </FontRegular1>
            <ButtonRegister>
                Cadastrar
            </ButtonRegister>
        </>
    )
};