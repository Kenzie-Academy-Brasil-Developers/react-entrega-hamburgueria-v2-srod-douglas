import React, { useContext } from "react"
import { DashboardContext } from "../../contexts/Dashboard"


import { InputHTMLAttributes } from "react"
import { iSearchProduct } from "../../contexts/Dashboard/types";
import { useForm } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}


export const HeaderDashboard = () => {
    const { search, setSearch } = useContext(DashboardContext)
console.log(search)

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
                    <span>Contador de itens do carrinho</span>
                    <button type="button">Logout</button>
                </div>
            </header>
        </>
    )
}