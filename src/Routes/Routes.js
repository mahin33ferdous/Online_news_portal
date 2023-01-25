import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Cetagory from "../pages/Cetagory/Cetagory";
import Home from "../pages/Home/Home/Home";
import News from "../pages/News/News";

export const router= createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/cet/:id',
                element:<Cetagory></Cetagory>
            },
            {
                path:'/new/:id',
                element: <News></News>
            }
        ]
    }
])

