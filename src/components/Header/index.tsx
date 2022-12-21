import { useContext } from "react"
import { DashboardContext } from "../../contexts/Dashboard"
import { IoCart } from 'react-icons/io5'
import { MdLogout, MdRemoveShoppingCart } from 'react-icons/md'
import { Modal } from "../Modal"
import { CartContext } from "../../contexts/CartContext"
import { UserContext } from "../../contexts/User"
import { Link } from "react-router-dom"
import brandLogo from '../../assets/images/brandCodeLogoCrop-removebg.png'
import { StyledHeader } from "./styles"
import { BsSearch } from 'react-icons/bs'

export const HeaderDashboard = () => {
    const { modal, setModal, setSearch } = useContext(DashboardContext)
    const { cart } = useContext(CartContext)
    const { logoutUser } = useContext(UserContext)

    if(modal){
        return(
            <Modal/>
        )
    }

    return (
        <>
            <StyledHeader>
                <div className="container">
                    <div>
                        <img src={brandLogo} alt="Logo code burguer"/>
                    </div>
                    <div>
                        <form>
                            <input onChange={(event) => setSearch(event.target.value)}
                                type="text" 
                                placeholder="Digitar Pesquisa"
                            />
                            <BsSearch />
                        </form>
                        {cart.length > 0 && 
                            <div onClick={() => setModal(true)}>
                                <IoCart onClick={() => setModal(true)} />
                                <span>
                                    {cart.length}
                                </span>
                            </div>}
                        {cart.length === 0 && 
                            <div>
                                <MdRemoveShoppingCart onClick={() => setModal(true)} />
                                    <span>
                                        {cart.length}
                                    </span>
                            </div>
                            }
                        <div>
                            <Link onClick={logoutUser} to="/login"><MdLogout/></Link>
                        </div>
                    </div>
                </div>
            </StyledHeader>
        </>
    )
}