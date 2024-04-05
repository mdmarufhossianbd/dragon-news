import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="bg-[#F3F3F3] p-4 flex">
            <button className="bg-[#D72050] text-white btn hover:bg-green-500 py-4 px-6">Brecking News</button>
            <Marquee speed={70} pauseOnHover={true}>
                <Link className="mr-10" to={"/"}>
                    I can be a React component, multiple React components, or just some text.
                </Link>
                <Link className="mr-10" to={"/"}>
                    I can be a React component, multiple React components, or just some text.
                </Link>
                <Link className="mr-10" to={"/"}>
                    I can be a React component, multiple React components, or just some text.
                </Link>
                <Link className="mr-10" to={"/"}>
                    I can be a React component, multiple React components, or just some text.
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;