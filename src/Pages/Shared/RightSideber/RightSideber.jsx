import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideber = () => {
    return (
        <div>
            {/* Log in */}
            <div>
                <h2 className="font-semibold text-2xl">Login With</h2>
                <button className="w-full flex justify-center border rounded-lg py-3 text-center my-3"><FaGoogle className="text-xl mr-4 text-[#4285f4]" /> Log in With Github
                </button>
                <button className="w-full flex justify-center border rounded-lg py-3 text-center"><FaGithub className="text-xl mr-4" /> Log in With Github
                </button>
            </div>
            {/* find Us on */}
            <div className="my-5">
                <h2 className="font-semibold text-2xl">Find Us On</h2>
                <div className="border rounded-lg">

                    <div className="pl-5 border-b">
                        <a className="flex items-center m-3 text-lg" href="http://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="mr-3 bg-[#F3F3F3] p-2 text-3xl rounded-[50%]" />
                            Facebook</a>
                    </div>
                    <div className="pl-5 border-b">
                        <a className="flex items-center m-3 text-lg" href="http://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="mr-3 bg-[#F3F3F3] p-2 text-3xl rounded-[50%]" />
                        Twitter</a>
                    </div>
                    <div className="pl-5">
                        <a className="flex items-center m-3 text-lg" href="http://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="mr-3 bg-[#F3F3F3] p-2 text-3xl rounded-[50%]" />
                        instagram</a>
                    </div>
                    
                </div>
            </div>
            {/* Q-Zone */}
            <div className="bg-[#F3F3F3]">
                <h2 className="p-4 text-xl font-semibold">Q-Zone</h2>
                <div className="p-1 m-1">
                    <img className="w-full border-2 border-dotted" src={qZone1} alt="" />
                </div>
                <div className="p-1 m-1">
                    <img className="w-full border-2 border-dotted" src={qZone2} alt="" />
                </div>
                <div className="p-1 m-1">
                    <img className="w-full border-2 border-dotted" src={qZone3} alt="" />
                </div>                
            </div>
        </div>
    );
};

export default RightSideber;