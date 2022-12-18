import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useState([] as idataProducts[])
  const [cartToRender, setCartToRender] = useState([] as idataProducts[])
  const [numberItems, setNumberItems] = useState(0)
  
  const totalCart = cart.reduce((previous, current) => previous + current.price, 0).toLocaleString(
    "pt-br", {
        style: "currency",
        currency: "BRL",
    }
  )

  useEffect(() => {
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
    getProducts()
  }, []);

  const addToCart = (product: idataProducts) => {
    const clone = [...dataProducts]
    if(clone !== undefined){
      const newCart = [...cart, {...product}]
      setCart(newCart)
      setCartToRender(newCart)
    }
    toast.success(`${product.name} foi adicionado ao carrinho!`)
  }

  useEffect(() => {
    const removeDuplicatedProductsToRender = (parameter: idataProducts[]) => {
      const setProduct = new Set
      const newCartToRender = parameter.filter((product) => {
        const checkSame = setProduct.has(product.id);
        setProduct.add(product.id);
        return !checkSame;
      });
      setCartToRender(newCartToRender)
    }

    if(cartToRender.length > 0){
      removeDuplicatedProductsToRender(cartToRender)
    }
  }, [cart])

  return (
    <DashboardContext.Provider value={{ token, dataProducts, setToken, setSearch, search, cart, setCart, modal, setModal, numberItems, setNumberItems, cartToRender, setCartToRender, addToCart, totalCart }}>
      {children}
    </DashboardContext.Provider>
  );
};