import React from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

export const AppLayout = () => {
    return (
        <main className="flex flex-col min-h-screen bg-[#FFFFFF]">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}
