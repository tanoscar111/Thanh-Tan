import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import CustomCursor from "./CustomCursor";
import Header from "./Component/Header";
import Featured from "./Component/Featured";
import About from "./Component/About";
import Gallery from "./Component/Gallery";
import useLocoScroll from "./hooks/useLocoScroll";
import Loading from "./Component/Loading";
import "./styles/home.scss";

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(6);

  const id = React.useRef(null);

  const clear = () => {
    // window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      <CustomCursor />
      <Loading />
      {!preloader ? (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      ) : null}
    </>
  );
};
export default Home;
