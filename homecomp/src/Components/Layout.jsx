import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "60px", maxWidth: "1100px", margin: "0 auto" }}>
        <Outlet />
      </main>

    </>
  );
}
