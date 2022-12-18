import { Route, Routes } from "react-router-dom"
import { DashboardProvider } from "../contexts/Dashboard"
import { DashboardPage } from "../pages/Dashboard"
import { LoginPage } from "../pages/Login"
import { RegisterPage } from "../pages/Register"

export const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<DashboardPage/>}/>
            <Route path="*" element={<LoginPage/>}/>
        </Routes>
    )
}