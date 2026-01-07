import React from "react";
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css"

export default function Layout() {
    return (
        <div className='layout-container'>
            <Navbar />
            <main style={{ paddingTop: "60px", maxWidth: "1100px", margin: "0 auto" }}>
                <Outlet />
            </main>
        </div>
    )
}
