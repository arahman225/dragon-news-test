import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftLayout = () => {
    const [categories, setCategories ]= useState([]);

    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res =>res.json())
        .then(data => setCategories(data.data.news_category))
    },[])
    return (
        <div>
            <div><h2>All categories ({categories.length})</h2></div>
            <div className="flex flex-col gap-4">
                {
                    categories.map(category => <NavLink 
                        to={`/categories/${category.category_id}`}
                        className="btn"
                        key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftLayout;