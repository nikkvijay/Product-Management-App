import { useState, useEffect, createContext } from "react";
import instance from "../utils/axios"; // Import your Axios instance

// Create the context
export const ProductContext = createContext();

const Context = (props) => {
    const [products, setProducts] = useState(null); // Initialize state to store products

    // Fetch products from the API
    const getProducts = async () => {
        try {
            const { data } = await instance.get("/products"); // Use the Axios instance
            setProducts(data); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching products:", error); // Handle errors
        }
    };

    // Call the fetch function when the component mounts
    useEffect(() => {
        getProducts();  
    }, []);

    // Provide the context value to children
    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;
