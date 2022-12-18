import { SetStateAction } from 'react'

export interface iDashboardProviderProps{
    children: React.ReactNode;
}

export interface iDashboardContextValues{
    dataProducts: idataProducts[];
    token: string | null;
    setToken: React.Dispatch<SetStateAction<string | null>>;
    search: iSearchProduct;
    setSearch: React.Dispatch<SetStateAction<string>>;
    cart: idataProducts[];
    setCart: React.Dispatch<SetStateAction<idataProducts[]>>;
    modal: boolean;
    setModal: React.Dispatch<SetStateAction<boolean>>;
    numberItems: number;
    setNumberItems: React.Dispatch<SetStateAction<number>>;
    cartToRender: idataProducts[];
    setCartToRender: React.Dispatch<SetStateAction<idataProducts[]>>;
    addToCart: (product: idataProducts) => void;
    totalCart: string;
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
