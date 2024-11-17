import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";


const Login = () => {

    const {loginUser, user} = useContext(AuthContext);
    const [success, setSuccess] =useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const handleLogin = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        loginUser(email, password)
        .then(res =>{
            console.log(res);
            setSuccess(true);
            toast.success('Success');
            setErrorMessage('');
            navigate(location?.state? location.state: '/')

        })
        .catch(error =>{
            console.log(error);
            toast.error('Failed to login');
            setSuccess(false)
        })
    }


    return (
        <div style={{ minHeight: 'calc(100vh - 100px)' }} className="flex items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <p>Don't have an account? <Link to='/auth/register' className="text-red-500">Register now</Link></p>
                    </div>
                    <div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;