import React from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import "./App.css"

export const AppLayout = () => {
    return (
        <main className="flex flex-col min-h-screen bg-[#FFFFFF] font-gilroy" >
            <Navbar />
            <div className="flex-grow mt-24">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}
