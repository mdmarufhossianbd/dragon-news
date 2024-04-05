import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import profile from '../../../assets/user.png';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const navlinks = <>
        <li><Link to={"/"}>Home</Link> </li>
        <li><Link to={"/"}>About</Link> </li>
        <li><Link to={"/"}>Career</Link> </li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navlinks
                        }
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <img className="w-[10%] mr-4" src={profile} alt="" />
                {
                    user ? <Link><button onClick={handleSignOut} className="bg-[#403F3F] text-white py-3 px-6">Log Out</button></Link>
                    :
                    <Link to={"/login"}><button className="bg-[#403F3F] text-white py-3 px-6">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navber;