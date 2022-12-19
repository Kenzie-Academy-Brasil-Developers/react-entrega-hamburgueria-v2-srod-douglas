import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { DashboardContext } from "../Dashboard";
import { iCartProviderProps, iDataProducts, iCartContextValues } from "./types";

export const CartContext = createContext({} as iCartContextValues)

export const CartProvider = ({ children }: iCartProviderProps) => {
    const {dataProducts} = useContext(DashboardContext)
    const [cart, setCart] = useState([] as iDataProducts[])
    const [cartToRender, setCartToRender] = useState([] as iDataProducts[])

    const totalCart = cart.reduce((previous, current) => previous + current.price, 0).toLocaleString(
        "pt-br", {
            style: "currency",
            currency: "BRL",
        }
      )

      const addToCart = (product: iDataProducts) => {
        const clone = [...dataProducts]
        if(clone !== undefined){
          const newCart = [...cart, {...product}]
          setCart(newCart)
          setCartToRender(newCart)
        }
        toast.success(`${product.name} foi adicionado ao carrinho!`)
      }

      useEffect(() => {
        const removeDuplicatedProductsToRender = (parameter: iDataProducts[]) => {
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

    return(
        <CartContext.Provider value={{ cart, setCart, totalCart, cartToRender, setCartToRender, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}