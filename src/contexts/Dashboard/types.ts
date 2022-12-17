import { SetStateAction } from 'react'

export interface iDashboardProviderProps{
    children: React.ReactNode;
}

export interface iDashboardContextValues{
    getProducts: () => void;
    dataProducts: idataProducts[];
    setToken: React.Dispatch<SetStateAction<string>>;
}

export interface idataProducts{
    category: string;
    id: number;
    img: string;
    name: string
    price: number;
}
