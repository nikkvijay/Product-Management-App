import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
    const [products] = useContext(ProductContext);

    console.log(products); // Ensure this logs the array of products

    return products && products.length > 0 ? (
        <>
            <Nav />
            <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto ">
                {products.map((product) => (
                    <Link
                        key={product.id} // Ensure each product has a unique key
                        to={`/details/${product.id}`} // Use the product ID for dynamic routing
                        className=" mr-3 mb-3 card pr-6 pl-6 pt-3 pb-3 border-md bg-zinc-100 w-[18%] h-[30vh] flex flex-col justify-center items-center"
                    >
                        <div
                            className="hover:scale-125 mb-3 w-full h-[80%] bg-no-repeat bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${product.image})`,
                                backgroundSize: "contain", // Maintain image aspect ratio
                            }}
                        ></div>
                        <h1 className="hover:text-blue-300 text-center w-full h-[20%]  truncate">{product.title}</h1> {/* Display product name */}
                    </Link>
                ))}
            </div>
        </>
    ) : (
        <Loading /> // Show loading spinner if products are not yet loaded
    );
};

export default Home;
