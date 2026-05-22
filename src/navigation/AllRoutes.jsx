import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <LandingPage /> } />
            <Route path="/signup" element={ <Signup /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/profile" element={ <Profile /> } />
        </Routes>
    )
}

export default AllRoutes;