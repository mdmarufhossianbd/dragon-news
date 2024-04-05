import PropTypes from 'prop-types';
import { CiCalendar } from "react-icons/ci";



const SideberNews = ({news}) => {
    
    return (
        <div className="mb-5">
            <img className="h-[250px] w-full object-cover" src={news.thumbnail_url} alt="" />
            <h2>{news.title}</h2>
            <div className="flex items-center gap-2">
                <h2>Recent News</h2>
                <CiCalendar />
                <p>{news.published_date?news.published_date:"No publish date"}</p>
            </div>
        </div>
    );
};

SideberNews.propTypes = {
    news: PropTypes.array
}


export default SideberNews;