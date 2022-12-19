import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../User";
import {
  iDashboardContextValues,
  iDashboardProviderProps,
  idataProducts,
  iSearchProduct,
} from "./types";

export const DashboardContext = createContext({} as iDashboardContextValues);

export const DashboardProvider = ({ children }: iDashboardProviderProps) => {
  const { token, user } = useContext(UserContext)
  const [dataProducts, setDataProducts] = useState([] as idataProducts[]);
  const [search, setSearch] = useState<iSearchProduct | any>()
  const [modal, setModal] = useState(false)
  const [numberItems, setNumberItems] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const getProducts = async () => {
      if (token !== null && user) {
        try {
          const res = await api.get("products", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setDataProducts(res.data);

        } catch (error) {
          console.log(error);
          toast.warn("Algo deu errado, faça login novamente.")
        }
      }
    };
    getProducts()
  }, [user]);

  useEffect(() => {
    if(!user){
      navigate("/login")
    }
  }, [user])

  return (
    <DashboardContext.Provider value={{ dataProducts, setSearch, search, modal, setModal, numberItems, setNumberItems }}>
      {children}
    </DashboardContext.Provider>
  );
};