import { useState, useEffect, createContext } from "react";
import instance from "../utils/axios"; 


export const ProductContext = createContext();

const Context = (props) => {
    const [products, setProducts] = useState(null); 

    // Fetch products from the API
    const getProducts = async () => {
        try {
            const { data } = await instance.get("/products"); 
            setProducts(data); 
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    
    useEffect(() => {
        getProducts();  
    }, []);

   
    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;
