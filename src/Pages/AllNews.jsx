import { Link } from "react-router-dom";


const AllNews = ({singleNews}) => {


    return (
        <div>
            <div className="mb-8 p-5">
                <img className="w-full" src={singleNews.image_url} alt="" />
                <Link to={`/news/${singleNews._id}`}>Read More</Link>
            </div>
        </div>
    );
};

export default AllNews;