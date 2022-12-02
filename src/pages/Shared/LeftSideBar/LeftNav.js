import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const[categories, setCategories]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div>
            <h3> All category: {categories.length}</h3>
            <div> 
                {
                    categories.map(category=><p key={category.id}>
                        <Link to={`/cet/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;