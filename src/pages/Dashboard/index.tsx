import { useContext } from "react"
import { ListCards } from "../../components/ListCards"
import { DashboardContext } from "../../contexts/Dashboard"

export const DashboardPage = () => {
    const { dataProducts } = useContext(DashboardContext)
    console.log(dataProducts)

    return(
        <div>
            <ListCards/>
        </div>
    )
}