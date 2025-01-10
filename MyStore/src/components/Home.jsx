import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import instance from "../utils/axios";

const Home = () => {
    const [products] = useContext(ProductContext);

    const { search } = useLocation();
    const category = search.split("=")[1] ? decodeURIComponent(search.split("=")[1]) : null;

    const [filteredProducts, setFilteredProducts] = useState(products);


    const getProductsByCategory = async () => {
        try {
            const { data } = await instance.get(`/products/category/${category}`);
            console.log("Category Products:", data);
            setFilteredProducts(data);
        } catch (error) {
            console.error("Error fetching category products:", error);
        }
    };


    useEffect(() => {
        if (!category || category === "undefined") {
            setFilteredProducts(products);
        } else {
            // getProductsByCategory();
            setFilteredProducts(products.filter(p => p.category === category))
        }
    }, [category, products]);

    return filteredProducts ? (
        <>
            <Nav />
            <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
                {filteredProducts.map((product) => (
                    <Link
                        key={product.id}
                        to={`/details/${product.id}`}
                        className="mr-3 mb-3 card pr-6 pl-6 pt-3 pb-3 border-md bg-zinc-100 w-[18%] h-[30vh] flex flex-col justify-center items-center"
                    >
                        <div
                            className="hover:scale-125 mb-3 w-full h-[80%] bg-no-repeat bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${product.image})`,
                                backgroundSize: "contain",
                            }}
                        ></div>
                        <h1 className="hover:text-blue-300 text-center w-full h-[20%] truncate">
                            {product.title}
                        </h1>
                    </Link>
                ))}
            </div>
        </>
    ) : (
        <Loading /> // Show loading spinner if no products are loaded yet
    );
};

export default Home;
