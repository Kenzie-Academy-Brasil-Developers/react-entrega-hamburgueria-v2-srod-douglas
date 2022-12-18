import { useContext, useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { CgMathMinus, CgMathPlus } from 'react-icons/cg'
import { toast } from 'react-toastify'
import { DashboardContext } from '../../contexts/Dashboard'
import { idataProducts } from '../../contexts/Dashboard/types'

export const Modal = () => {
    const { cart, setModal, cartToRender, totalCart, setCart, setCartToRender, addToCart } = useContext(DashboardContext)

    const removeToCart = (product: idataProducts) => {
        setCartToRender(cart.filter((item) => item !== product))
        setCart(cart.filter((item) => item !== product))

    toast.warn(`${product.name} foi removido do carrinho`)
    }

    const removeAll = () => {
        setCart([])
        setCartToRender([])
    }

    if(cart.length > 0){
        return (
            <div>
                <div>
                    <h2>Carrinho de compras</h2>
                    <div onClick={() => setModal(false)}>
                        <AiFillCloseCircle />
                    </div>
                </div>
                <div>
                    <ul>
                        {cartToRender.map((product, index) =>
                            <li key={index}>
                                <div>
                                    <div>
                                        <img src={product.img} />
                                    </div>
                                    <div>
                                        <h2>{product.name}</h2>
                                        <div>
                                            <div onClick={() => removeToCart(product)}>
                                                <CgMathMinus/>
                                            </div>
                                            <div>
                                                <span>
                                                    {cart.filter((item) => item.id === product.id).length}
                                                </span>
                                            </div>
                                            <div onClick={() => addToCart(product)}>
                                                <CgMathPlus/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        )}
                    </ul>
                </div>
                <div>
                            <h2>Total</h2>
                            <h2>{totalCart}</h2>
                </div>
                <div>
                    <button onClick={() => removeAll()}>Remover Todos</button>
                </div>
            </div>
        )
    }else{
        return(
            <div>
            <div>
                <h2>Carrinho de compras</h2>
                <div onClick={() => setModal(false)}>
                    <AiFillCloseCircle />
                </div>
            </div>
            <div>
                <h2>Sua sacola está vazia</h2>
                <h3>Adicione itens</h3>
            </div>

        </div>
        )
    }
}