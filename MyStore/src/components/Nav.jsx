import React from 'react'
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {


    const [products] = useContext(ProductContext);

    let distinctCategories = products && products.reduce((acc, cv) => [...acc, cv.category], [])
    distinctCategories = [...new Set(distinctCategories)]

    const color = () => {
        return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},1)`
    }


    return (
        <>
            <nav className=" w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
                <a
                    href="/create"
                    className="py-3 px-5 border rounded  border-blue-200 text-blue-300"
                >
                    {" "}
                    Add new product
                </a>
                <hr className="w-[80%] my-3" />
                <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>

                <div className=" w-[80%]  ">


                    {distinctCategories.map((category, i) => (

                        <Link to={`/?category=${category}`} key={i} className="mb-3  flex items-center capitalize ">
                            <span style={{ backgroundColor: color() }} className="block w-[15px] h-[15px] mr-3 rounded-full"> </span>

                            {category}
                        </Link>
                    ))}

                </div>
            </nav>
        </>
    )
}

export default Nav
