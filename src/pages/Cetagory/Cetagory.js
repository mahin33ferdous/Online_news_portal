import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cetagory = () => {
    const news= useLoaderData();
    return (
        <div>
            <h1>cetagory:{news.length}</h1>
        </div>
    );
};

export default Cetagory;