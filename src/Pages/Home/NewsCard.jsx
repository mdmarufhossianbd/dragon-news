import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { IoStar } from "react-icons/io5";


import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { _id, rating, total_view, title, author, image_url, details } = news;
    return (
        <div className="border border-[#F3F3F3] rounded mb-5 ">
            <div className="bg-[#F3F3F3] flex items-center justify-between">
                <div className="flex p-4 gap-2">
                    <img className="rounded-full w-12" src={author.img} alt="" />
                    <div>
                        <h4 className="font-medium">{author.name ? author.name : "Author Name"}</h4>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3 mr-5">
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <h2 className="p-4 text-xl font-semibold">{title}</h2>
            <img className="p-4" src={image_url} alt="" />
            {
                details.length > 150 ? <p className="px-4">{details.slice(0, 150)} <Link to={`/news/${_id}`} className="text-[#FF8C47] hover:text-green-600" >Read More...</Link></p> : <p className="pl-4">
                    {details}</p>
            }
            <hr className="m-4" />
            <div className="p-4 flex justify-between">
                <div className="flex items-center gap-2">
                    <IoStar className="text-[#FF8C47]" />
                    <IoStar className="text-[#FF8C47]" />
                    <IoStar className="text-[#FF8C47]" />
                    <IoStar className="text-[#FF8C47]" />
                    <IoStar className="text-[#FF8C47]" />
                    <p>{rating.number}</p>
                </div>
                <div className="flex items-center gap-2">
                <IoMdEye />
                <p>{total_view}</p>
                </div>
            </div>

        </div>
    );
};

NewsCard.propTypes  = {
    news: PropTypes.object
}

export default NewsCard;