import { useLoaderData } from "react-router-dom";


const Deatils = () => {

    const data = useLoaderData()

    const news = data.data[0]
    console.log(news)

    return (
        <div>
            <h2>Details Pages</h2>
            <img  src={news.image_url} alt="" />
        </div>
    );
};

export default Deatils;