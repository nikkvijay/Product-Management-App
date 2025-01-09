import React from "react";
import { useState } from "react";

const Create = () => {
  const [img, setimg] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    const product = {
      title,
      price,
      category,
      description,
      img,
    };
    console.log(product);
  };

  return (
    <form
      action=""
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl"> Add new Product</h1>
      <input
        type="url"
        className="w-1/2  text=1xl bg-zinc-100 mb-3 p-3 border rounded"
        placeholder="Image URL"
        onChange={(e) => setimg(e.target.value)}
        value={img}
      />
      <input
        type="text"
        className="w-1/2  text=1xl bg-zinc-100 mb-3 p-3 border rounded"
        placeholder="Title"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2  flex justify-between">
        <input
          type="text"
          className="w-[48%]  text=1xl bg-zinc-100 mb-3 p-3 border rounded"
          placeholder="Category"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          className="w-[48%] text=1xl bg-zinc-100 mb-3 p-3 border rounded"
          placeholder="Price"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>

      <textarea
        onChange={(e) => setdescription(e.target.value)}
        className="w-1/2  text=1xl bg-zinc-100 mb-3 p-3 border rounded"
        name=""
        placeholder="Product Description"
        rows="10"
      ></textarea>

      <div className="w-1/2">
        <button
          href="/create"
          className="py-3 px-5 border rounded  border-blue-200 text-blue-300"
        >
          {" "}
          Add new product
        </button>
      </div>
    </form>
  );
};

export default Create;
