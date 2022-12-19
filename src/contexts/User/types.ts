import { SetStateAction } from "react";
import { SubmitHandler } from "react-hook-form";

export interface iUserProviderProps{
    children: React.ReactNode;
}

export interface iUserContextValues{
    token: string | null;
    user: boolean;
    setUser: React.Dispatch<SetStateAction<boolean>>;
    userPersist: boolean;
    setUserPersist: React.Dispatch<SetStateAction<boolean>>;
    submitLogin: SubmitHandler<iFormLogin>;
    logoutUser: () => void;
}

export interface iDefaultErrorApi{
    error: string
}
  
export interface iFormLogin{
    email: string;
    password: string;
}
