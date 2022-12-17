import { idataProducts } from '../../contexts/Dashboard/types'
import { iCardProps } from './types'

export const Card = ({ products }: iCardProps) => {
  
  return(
    <>
      {products !== undefined && products !== null && products.map((product: idataProducts) => (
          <li key={product.id}>
            <h1>{product.name}</h1>
            <h2>{product.category}</h2>
            <img src={product.img} />
            <span>{product.price}</span>
          </li>
      ))}
    </>
  )
}
