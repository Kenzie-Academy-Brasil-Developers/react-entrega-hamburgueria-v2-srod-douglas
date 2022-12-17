import { useContext } from "react"
import { DashboardContext } from "../../contexts/Dashboard"
import { Card } from "../Card"

export const ListCards = () => {
    const { dataProducts } = useContext(DashboardContext)
    return (
        <ul>
            {
                <Card products={dataProducts} />
            }
        </ul>
    )
}