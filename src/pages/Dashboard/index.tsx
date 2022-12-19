import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { HeaderDashboard } from "../../components/Header"
import { ListCards } from "../../components/ListCards"
import { UserContext } from "../../contexts/User";

export const DashboardPage = () => {
    const { user, userPersist } = useContext(UserContext);

    if(!user && !userPersist){
        return <Navigate to='/login'/>
    };

    return(
        <div>
            <HeaderDashboard />
            <main className="animate__animated animate__slideInRight animate__slower">
                <section>
                    <ListCards/>
                </section>
            </main>
        </div>
    )
}