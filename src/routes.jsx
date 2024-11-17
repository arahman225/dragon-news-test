import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";
import Categories from "./Pages/Categories";
import Deatils from "./Pages/Deatils";
import Auth from "./AuthLayout/Auth";
import Login from "./AuthLayout/Login";
import Register from "./AuthLayout/Register";
import PrivateLayout from "./Pages/PrivateLayout";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: '/',
                element: <Navigate to='/categories/01'></Navigate>,
            },
            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:'/news/:id',
        element:<PrivateLayout><Deatils></Deatils></PrivateLayout>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: 'auth',
        element: <Auth></Auth>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    }
])

export default routes;