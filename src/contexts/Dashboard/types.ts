import { SetStateAction } from 'react'

export interface iDashboardProviderProps{
    children: React.ReactNode;
}

export interface iDashboardContextValues{
    dataProducts: idataProducts[];
    search: iSearchProduct;
    setSearch: React.Dispatch<SetStateAction<string>>;
    modal: boolean;
    setModal: React.Dispatch<SetStateAction<boolean>>;
    numberItems: number;
    setNumberItems: React.Dispatch<SetStateAction<number>>;
}

export interface idataProducts{
    category: string;
    id: number;
    img: string;
    name: string
    price: number;
}
  
export interface iSearchProduct{
    search: string | any;
    setSearch: React.Dispatch<SetStateAction<string>>;
    toLocaleLowerCase(): string;
}