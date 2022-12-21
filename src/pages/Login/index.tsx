import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FormLogin } from "../../components/Forms/FormLogin"
import { UserContext } from "../../contexts/User"
import { StyledMainLoginPage } from "./styles"
import brandDark from '../../assets/images/BRANDDARK.png'
import brandCrop from '../../assets/images/brandCodeLogoCrop-removebg.png'
import 'animate.css'

export const LoginPage = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        if(user){
            navigate('/dashboard')
        }
    }, [])

    return(
        <StyledMainLoginPage className="animate__animated animate__slideInRight animate__slow">
            <section>
                <FormLogin/>
            </section>
            <section className="animate__animated animate__fadeInLeft animate__slower">
                <img src={brandDark} alt="logo code burguer" />
                <img src={brandCrop} alt="logo code burguer" />
            </section>
        </StyledMainLoginPage>
    )
}