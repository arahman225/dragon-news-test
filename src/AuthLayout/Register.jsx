import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [success, setSuccess] = useState(null)
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = e =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
        .then(res => {
            console.log(res);
            setSuccess(true);
            setErrorMessage('')
            toast.success('success')
        })
        .catch(error =>{
            setErrorMessage('Email already in use');
            setSuccess(false)
        })
    }


    return (
        <div style={{ minHeight: 'calc(100vh - 100px)' }} className="flex items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div>
                        <p>Already have an accoutn? <Link to='/auth/login' className="text-green-500">Login</Link></p>
                        {
                            success? <p className="text-green-600">Success</p>: <p className="text-red-600">{errorMessage}</p>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;