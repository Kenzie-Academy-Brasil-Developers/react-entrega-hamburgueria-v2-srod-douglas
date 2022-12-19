import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { idataProducts } from '../../contexts/Dashboard/types'
import { ButtonAddToCart } from '../../styles/buttons'
import { FontPrice, FontRegular2, FontRegular3, TitleBold2, TitleBold3 } from '../../styles/typography'
import { iCardProps } from './types'

export const Card = ({ products }: iCardProps) => {
  const { addToCart } = useContext(CartContext)

  return(
    <>
      {products !== undefined && products !== null && products.map((product: idataProducts) => (
          <li key={product.id}>
            <div>
              <img src={product.img} />
            </div>
            <div>
              <TitleBold2>{product.name}</TitleBold2>
              <FontRegular2>{product.category}</FontRegular2>
              <FontPrice>
                {product.price.toLocaleString(
                  "pt-br", {
                      style: "currency",
                      currency: "BRL",
                  }
                )}
              </FontPrice>
              <ButtonAddToCart onClick={() => addToCart(product)}>Adicionar</ButtonAddToCart>
            </div>
          </li>
      ))}
    </>
  )
}