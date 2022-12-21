import { useContext } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { CgMathMinus, CgMathPlus } from 'react-icons/cg'
import { FaRegSadTear } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { CartContext } from '../../contexts/CartContext'
import { DashboardContext } from '../../contexts/Dashboard'
import { idataProducts } from '../../contexts/Dashboard/types'
import { ButtonRemoveAll } from '../../styles/buttons'
import { BodyModal, BodyModalEmpty, ContainerModalEmpty, ContainerModalWithItems } from './styles'
import 'animate.css'

export const Modal = () => {
    const { setModal } = useContext(DashboardContext)
    const { cart, setCart, cartToRender, setCartToRender, totalCart, addToCart } = useContext(CartContext)

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
            <ContainerModalWithItems className="animate__animated animate__fadeIn">
                <BodyModal className="animate__animated animate__bounceInDown">
                    <header>
                        <h2>Carrinho de compras</h2>
                        <div onClick={() => setModal(false)}>
                            <AiFillCloseCircle />
                        </div>
                    </header>
                    <main>
                        <ul>
                            {cartToRender.map((product, index) =>
                                <li key={index} className="animate__animated animate__fadeIn">
                                    <div>
                                        <div>
                                            <img src={product.img} alt={product.name} />
                                        </div>
                                        <div>
                                            <h2>{product.name}</h2>
                                            <fieldset>
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
                                            </fieldset>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </main>
                    <div className='total'>
                        <h2>Total</h2>
                        <h2>{totalCart}</h2>
                    </div>
                    <div>
                        <ButtonRemoveAll onClick={() => removeAll()}>
                            Remover Todos
                        </ButtonRemoveAll>
                    </div>
                </BodyModal>
            </ContainerModalWithItems>
        )
    }else{
        return(
            <ContainerModalEmpty className="animate__animated animate__fadeIn">
                <BodyModalEmpty className="animate__animated animate__bounceInDown">
                    <header>
                        <h2>Carrinho de compras</h2>
                        <div onClick={() => setModal(false)}>
                            <AiFillCloseCircle />
                        </div>
                    </header>
                    <fieldset>
                        <h2>Sua sacola está vazia</h2>
                        <div>
                            <FaRegSadTear />
                        </div>
                        <h3>Adicione itens!</h3>
                    </fieldset>
            </BodyModalEmpty>
        </ContainerModalEmpty>
        )
    }
}