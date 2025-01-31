import { lazy, Suspense } from "react";
import "./App.css";
import ChatApp from "./components/ChatApp";
import EmailApp from "./components/EmailApp";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// <div className="flex flex-col ">
//
// </div>

{
  /* */
}
