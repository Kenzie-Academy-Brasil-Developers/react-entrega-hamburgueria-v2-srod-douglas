import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { FormLogin } from "../../components/Forms/FormLogin"
import { UserContext } from "../../contexts/User"

export const LoginPage = () => {
    const { user } = useContext(UserContext)

    if(user){
        return <Navigate to='/dashboard' />
    }
    return(
        <>
            <div>Login Page</div>
            <FormLogin/>
        </>
    )
}