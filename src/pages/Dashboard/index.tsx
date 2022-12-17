import { useContext } from "react"
import { HeaderDashboard } from "../../components/Header"
import { ListCards } from "../../components/ListCards"
import { DashboardContext } from "../../contexts/Dashboard"

export const DashboardPage = () => {
    const { dataProducts } = useContext(DashboardContext)
    console.log(dataProducts)

    return(
        <div>
            <HeaderDashboard />
            <ListCards/>
        </div>
    )
}