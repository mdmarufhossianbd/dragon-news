import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SideberNews from "./SideberNews";

const LeftSideber = () => {
    const [categories, setCategories] = useState([]);

    const [leftSidePost, setLeftSidePost] = useState([]);

    


    useEffect (()=>{
        fetch('Data/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[]);

    useEffect(()=>{
        fetch('Data/news.json')
        .then(res => res.json())
        .then(data => setLeftSidePost(data))
    },[]);

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">All Caterogy</h2>
            {
                categories.map(category => <NavLink to={`/category/${category.id}`} className="block" key={category.id}>{category.name}</NavLink>)
            }
            {
                leftSidePost.map(news=> <SideberNews key={news._id} news={news} >{news}</SideberNews> )
            }
        </div>
    );
};



export default LeftSideber;