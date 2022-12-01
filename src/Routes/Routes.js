import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Cetagory from "../pages/Cetagory/Cetagory";
import Home from "../pages/Home/Home/Home";

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
                path:'/cet:id',
                element:<Cetagory></Cetagory>
            }
        ]
    }
])

