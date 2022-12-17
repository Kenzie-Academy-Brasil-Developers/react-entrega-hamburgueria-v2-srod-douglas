import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { DashboardContext } from '../../contexts/Dashboard'
import { idataProducts } from '../../contexts/Dashboard/types'
import { iCardProps } from './types'

export const Card = ({ products }: iCardProps) => {
  const { cart, setCart } = useContext(DashboardContext)

  const addToCart = (product: idataProducts) => {
    const newCart = [...cart, product]

    setCart(newCart)
    toast.success(`${product.name} foi adicionado ao carrinho!`)
    console.log(newCart)
  }

  return(
    <>
      {products !== undefined && products !== null && products.map((product: idataProducts) => (
          <li key={product.id}>
            <h1>{product.name}</h1>
            <h2>{product.category}</h2>
            <img src={product.img} />
            <span>{product.price}</span>
            <button onClick={() => addToCart(product)}>Adicionar</button>
          </li>
      ))}
    </>
  )
}
