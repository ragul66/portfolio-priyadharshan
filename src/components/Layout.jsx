// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar

const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Navbar is always displayed */}
      <main>
        <Outlet /> {/* Content will be rendered here */}
      </main>
    </div>
  );
};

export default Layout;
