import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { FormLogin } from "../../components/Forms/FormLogin"
import { UserContext } from "../../contexts/User"
import { StyledMainLoginPage } from "./styles"
import brandWhite from '../../assets/images/BRANDWHITE.png'
import 'animate.css'

export const LoginPage = () => {
    const { user } = useContext(UserContext)

    if(user){
        return <Navigate to='/dashboard' />
    }
    return(
        <StyledMainLoginPage className="animate__animated animate__slideInRight animate__slow">
            <section>
                <FormLogin/>
            </section>
            <section className="animate__animated animate__fadeInLeft animate__slower">
                <img src={brandWhite} />
            </section>
        </StyledMainLoginPage>
    )
}