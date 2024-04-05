import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Navber from "../Shared/Navber/Navber";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        signIn(email, password)
        .then(result =>{
            result.user

            navigate(location?.state ? location.state : "/")
            console.log(result);
        })
        .catch(error =>{
            error.message
            console.log(error);
        })
        
        // console.log(email, password)
    }

    return (
        <div className="bg-[#f3f3f3] pb-14">
            <Navber></Navber>
            <div className="w-1/2 mx-auto m-14 bg-white p-10">
                <h2 className="text-center font-semibold text-2xl">Login your account</h2>
                <hr className="my-5" />
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="">Email address</label>
                        <input className="p-4 bg-[#F3F3F3] rounded-md border-none" type="email" name="email" placeholder='Enter your email address' />
                        <label htmlFor="">Password</label>
                        <input className="p-4 bg-[#F3F3F3] rounded-md border-none" type="password" name="password" placeholder='Enter your password' />                        
                        <button  className="bg-[#403F3F] text-white py-4 rounded-lg">Login</button>
                    </div>
                    <p className="text-center my-6">Dont’t Have An Account ? <Link className="text-red-600 font-medium" to={'/register'}>Register</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;