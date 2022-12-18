import { useContext, useState } from "react"
import { DashboardContext } from "../../contexts/Dashboard"
import { IoCart } from 'react-icons/io5'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { Modal } from "../Modal"
export const HeaderDashboard = () => {

    const { modal, setModal } = useContext(DashboardContext)
    const { setSearch, cart } = useContext(DashboardContext)

    
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
                    <button type="button">Logout</button>
                </div>
            </header>
        </>
    )
}