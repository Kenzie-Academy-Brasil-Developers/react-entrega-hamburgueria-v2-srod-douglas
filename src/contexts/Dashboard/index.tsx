import { createContext, useEffect, useState, SetStateAction } from "react";
import { api } from "../../services/api";
import {
  iDashboardContextValues,
  iDashboardProviderProps,
  idataProducts,
} from "./types";

interface iToken {
  setToken: React.Dispatch<SetStateAction<string>>;
  token: string | null;
}

export const DashboardContext = createContext({} as iDashboardContextValues);

export const DashboardProvider = ({ children }: iDashboardProviderProps) => {

  const [dataProducts, setDataProducts] = useState([] as idataProducts[]);
  const [token, setToken] = useState<iToken | any>(null);
  console.log("carregou meu componente dashboardProvider");

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
    console.log("useEffect foi chamado");
    getProducts()
  }, [token]);

  return (
    <DashboardContext.Provider value={{ getProducts, dataProducts, setToken }}>
      {children}
    </DashboardContext.Provider>
  );
};