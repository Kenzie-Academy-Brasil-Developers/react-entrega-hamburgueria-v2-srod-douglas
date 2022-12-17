import { useContext } from "react"
import { DashboardContext } from "../../contexts/Dashboard"

export const HeaderDashboard = () => {

    const { setSearch, cart } = useContext(DashboardContext)

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
                    <span>{cart.length}</span>
                    <button type="button">Logout</button>
                </div>
            </header>
        </>
    )
}