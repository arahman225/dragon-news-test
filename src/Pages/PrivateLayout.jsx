import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

import { Navigate } from "react-router-dom";


const PrivateLayout = ({children}) => {

    const {user, loading} = useContext(AuthContext);


    if(loading){
        return <div className="min-h-screen mx-auto flex justify-center">
            <span className="loading loading-bars loading-lg bg-green-800"></span>
        </div>
    }
    if(user){
        return children;
    }


    return (
        <Navigate state={location.pathname} to='/auth/login'>
            
        </Navigate>
    );
};

export default PrivateLayout;