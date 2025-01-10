import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid"; // Ensure you have nanoid installed
import { toast } from "react-toastify";

const Edit = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useContext(ProductContext);
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: "",
        description: "",
        image: "",
        category: "",
        price: "",
    });

    const ChangeHandler = (e) => {
        // console.log(e, name, e.target.value)
        setProduct({ ...product, [e.target.name]: e.target.value });
    }


    useEffect(() => {
        setProduct(products.filter((p) => p.id === id)[0]);
    }, [id]);

    const AddProductHandler = (e) => {
        e.preventDefault();

        if (
            product.title.trim().length < 5 ||
            product.image.trim().length < 5 ||
            product.description.trim().length < 5 ||
            product.category.trim().length < 5 ||
            product.price.trim().length < 1
        ) {
            alert("Every field is required to be at least 5 characters long");
            return;
        }

        const pi = products.findIndex((p) => p.id === id);
        const copyData = [...products];
        copyData[pi] = { ...products[pi], ...product };


        setProducts(copyData);
        localStorage.setItem("products", JSON.stringify(copyData));
        toast.success("Product edited successfully")
        navigate(-1);
    };

    return (
        <form
            action=""
            onSubmit={AddProductHandler}
            className="flex flex-col items-center p-[5%] w-screen h-screen"
        >
            <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
            <input
                type="url"
                className="w-1/2 text=1xl bg-zinc-100 mb-3 p-3 border rounded"
                placeholder="Image URL"
                name="image"
                onChange={ChangeHandler}
                value={product && product.image}
            />
            <input
                type="text"
                className="w-1/2 text=1xl bg-zinc-100 mb-3 p-3 border rounded"
                placeholder="Title"
                name="title"
                onChange={ChangeHandler}
                value={product && product.title}
            />
            <div className="w-1/2 flex justify-between">
                <input
                    type="text"
                    className="w-[48%] text=1xl bg-zinc-100 mb-3 p-3 border rounded"
                    placeholder="Category"
                    onChange={ChangeHandler}
                    name="category"
                    value={product && product.category}
                />
                <input
                    type="number"
                    className="w-[48%] text=1xl bg-zinc-100 mb-3 p-3 border rounded"
                    placeholder="Price"
                    onChange={ChangeHandler}
                    name="price"
                    value={product && product.price}
                />
            </div>
            <textarea
                onChange={ChangeHandler}
                className="w-1/2 text=1xl bg-zinc-100 mb-3 p-3 border rounded"
                name="description"
                placeholder="Product Description"
                rows="10"
                value={product && product.description}
            ></textarea>
            <div className="w-1/2">
                <button className="py-3 px-5 border rounded border-blue-200 text-blue-300">
                    Edit product
                </button>
            </div>
        </form>
    );
};

export default Edit;
