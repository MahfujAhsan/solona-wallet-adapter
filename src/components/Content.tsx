import { FC } from "react";
import Home from "./Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
require("../App.css");
require("@solana/wallet-adapter-react-ui/styles.css");

const Content: FC = () => {
  return (
    <section className="main-container">
      <div className="sidebar">
        <Navbar />
        <Footer />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
};

export default Content;
