import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";




const Auth = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;