import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideber from "../Shared/LeftSideber/LeftSideber";
import Navber from "../Shared/Navber/Navber";
import RightSideber from "../Shared/RightSideber/RightSideber";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();
    console.log(news);

    return (
        <div className="font-poppines">
            <Header></Header>
            <div>
                <BreakingNews></BreakingNews>
            </div>
            <Navber></Navber>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideber></LeftSideber>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Dragon News</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideber></RightSideber>
                </div>
            </div> 
        </div>
    );
};

export default Home;