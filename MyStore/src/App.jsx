import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

const App = () => {
  const { search, pathname } = useLocation();

  
  const shouldShowHomeLink = pathname !== "/" || (search && search.length > 0);

  return (
    <div className="h-screen w-screen flex flex-col">
      
      {shouldShowHomeLink && (
        <Link
          className="text-red-300 absolute top-[5%] left-[5%] text-lg font-semibold"
          to="/"
        >
          Home
        </Link>
      )}

      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
