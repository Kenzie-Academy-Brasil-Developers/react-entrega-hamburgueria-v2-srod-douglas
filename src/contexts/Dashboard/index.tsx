import { createContext, useEffect, useState, SetStateAction } from "react";
import { api } from "../../services/api";
import {
  iDashboardContextValues,
  iDashboardProviderProps,
  idataProducts,
  iSearchProduct,
  iToken,
} from "./types";



export const DashboardContext = createContext({} as iDashboardContextValues);

export const DashboardProvider = ({ children }: iDashboardProviderProps) => {

  const [dataProducts, setDataProducts] = useState([] as idataProducts[]);
  const [token, setToken] = useState<iToken | any>(null);
  const [search, setSearch] = useState<iSearchProduct | any>()
  const [cart, setCart] = useState([] as idataProducts[])

  const getProducts = async () => {
    if (token !== null) {
      try {
        const res = await api.get("products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDataProducts(res.data);

      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getProducts()
  }, [token]);

  return (
    <DashboardContext.Provider value={{ getProducts, dataProducts, setToken, setSearch, search, cart, setCart }}>
      {children}
    </DashboardContext.Provider>
  );
};