import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(res =>{
            toast.success('successfully sing out')
        })
        .catch(error =>{
            console.log(error)
        })
    }
 
    return (
        <div className="w-4/5 mx-auto">
            <div className="flex justify-between">
                <a href="">{user && user.email}</a>
                <div>
                    <ul className="flex items-center gap-5">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Career</Link></li>
                    </ul>
                </div>
                <div className="flex">
                    <p><FaUser></FaUser></p>
                    <div>
                        {
                            user? <button onClick={handleLogOut}>Log out</button>:<Link to='/auth/login' className="btn">log in</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;