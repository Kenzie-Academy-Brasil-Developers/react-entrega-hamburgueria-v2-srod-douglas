import { useContext, useState } from "react"
import { DashboardContext } from "../../contexts/Dashboard"
import { IoCart } from 'react-icons/io5'
import { MdLogout, MdRemoveShoppingCart } from 'react-icons/md'
import { Modal } from "../Modal"
import { CartContext } from "../../contexts/CartContext"
import { UserContext } from "../../contexts/User"
import { Link } from "react-router-dom"

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
            <header>
                <div>
                    <h1>CODE<span>burguer</span></h1>
                </div>
                <div>
                    <form>
                        <input onChange={(event) => setSearch(event.target.value)} type="text" placeholder="Digitar Pesquisa"/>
                        <button type="submit">Search</button>
                    </form>
                    {cart.length > 0 && <div onClick={() => setModal(true)}><IoCart /><span>{cart.length}</span></div>}
                    {cart.length === 0 && <div><MdRemoveShoppingCart /><span>{cart.length}</span></div>}
                    <div>
                        <Link onClick={logoutUser} to="/login"><MdLogout/></Link>
                    </div>
                </div>
            </header>
        </>
    )
}