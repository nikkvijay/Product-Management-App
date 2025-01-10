import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";

const App = () => {
  const { search, pathname } = useLocation();


  const shouldShowHomeLink = pathname !== "/" || (search && search.length > 0);

  return (
    <div className="h-screen w-screen flex flex-col">

      {shouldShowHomeLink && (
        <Link
          className="text-red-300 absolute top-[5%] left-[15%] text-lg font-semibold"
          to="/"
        >
          Home
        </Link>
      )}


      <div className="flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />

          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
