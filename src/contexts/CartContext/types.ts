import { SetStateAction } from "react";

export interface iCartProviderProps{
    children: React.ReactNode;
}

export interface iCartContextValues{
    cart: iDataProducts[];
    setCart: React.Dispatch<SetStateAction<iDataProducts[]>>;
    cartToRender: iDataProducts[];
    setCartToRender: React.Dispatch<SetStateAction<iDataProducts[]>>;
    totalCart: string;
    addToCart: (product: iDataProducts) => void;
}

export interface iDataProducts{
    category: string;
    id: number;
    img: string;
    name: string
    price: number;
}