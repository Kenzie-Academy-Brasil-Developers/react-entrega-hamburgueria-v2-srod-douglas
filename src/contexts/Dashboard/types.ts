import { SetStateAction } from 'react'

export interface iDashboardProviderProps{
    children: React.ReactNode;
}

export interface iDashboardContextValues{
    dataProducts: idataProducts[];
    getProducts: () => void;
    setToken: React.Dispatch<SetStateAction<string>>;
    search: iSearchProduct;
    setSearch: React.Dispatch<SetStateAction<string>>;
    cart: idataProducts[];
    setCart: React.Dispatch<SetStateAction<idataProducts[]>>
}

export interface idataProducts{
    category: string;
    id: number;
    img: string;
    name: string
    price: number;
}

export interface iToken {
    setToken: React.Dispatch<SetStateAction<string>>;
    token: string | null;
}
  
export interface iSearchProduct{
    search: string | any;
    setSearch: React.Dispatch<SetStateAction<string>>;
    toLocaleLowerCase(): string;
}
