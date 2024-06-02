import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../com/Header";

const Layout = () => {
  return (
    <div class="bg-black text-white min-h-screen">
      <div class="container px-6 py-4 mx-auto">
        <Header/>
        <main>
          <Outlet />
        </main>
        
      </div>
    </div>
    
  );
};

export default Layout;