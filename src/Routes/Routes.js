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
                element:<Home></Home>,
                loader: ()=> fetch(`http://localhost:5000/news`)
            },
            {
                path:'/cet/:id',
                element:<Cetagory></Cetagory>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)//getting data from server-side
            },
            {
                path:'/news/:id',
                element: <News></News>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            
            }
        ]
    }
])

