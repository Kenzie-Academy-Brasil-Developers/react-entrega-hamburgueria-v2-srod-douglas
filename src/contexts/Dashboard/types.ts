export interface iDashboardProviderProps{
    children: React.ReactNode;
}

export interface iDashboardContextValues{
    getProducts: () => void;
    dataProducts: idataProducts[]
}

export interface idataProducts{
    category: string;
    id: number;
    img: string;
    name: string
    price: number;
}
