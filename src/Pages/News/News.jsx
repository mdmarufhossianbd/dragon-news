import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navber from "../Shared/Navber/Navber";
import RightSideber from "../Shared/RightSideber/RightSideber";


const News = () => {

    const [singleNews, setSingleNews] = useState({});

    const { id } = useParams();
    const news = useLoaderData();
    // console.log("console log form news",news);

    useEffect (()=>{
        if(news){
            const singleNews = news.find((item) =>item._id == id );
            setSingleNews(singleNews)
        }
    },[id, news])

    const { title, image_url, details, } = singleNews
    return (

        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid md:grid-cols-4">
                <div className="md:col-span-3">
                    <h2 className="text-xl font-semibold mb-4">Dragon News</h2>
                    <div className="border border-[#E7E7E7] rounded p-4 mx-4">
                        <img className="w-full" src={image_url} alt="" />
                        <h2 className="text-xl font-semibold my-3">{title}</h2>
                        <p>{details}</p>
                        <Link to={'/'}><button className="flex items-center gap-2 bg-[#D72050] text-white px-6 py-3 mt-3"> <FaArrowLeft />
                            All news in this category</button></Link>
                    </div>
                </div>
                <RightSideber></RightSideber>
            </div>

        </div>
    );
};

export default News;