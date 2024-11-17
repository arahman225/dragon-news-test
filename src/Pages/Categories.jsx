import { useLoaderData } from "react-router-dom";
import AllNews from "./AllNews";


const Categories = () => {
    const {data:news} = useLoaderData();

    console.log(news)
    return (
        <div>
            <div><h2>Catgories news</h2></div>
            <div className="mb-7">
                {
                    news.map(singleNews => <AllNews key={singleNews._id} singleNews={singleNews}></AllNews>)
                }
            </div>
        </div>
    );
};

export default Categories;