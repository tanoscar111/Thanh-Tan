import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./loading.css";
const tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
const Loadiing = () => {
  useEffect(() => {
    tl.to(".loading", 1.5, {
      duration: 1.5,
      y: "-100%",
      delay: 4,
    });
  });
  return (
    <div className="loading__container">
      <div className="loading">
        <section className="animation-box">
          <div className="fourth-text"> I’m Khoa Pham</div>
          <div className="fifth-text"> Achitect from Da Nang, Viet Nam</div>
        </section>
      </div>
    </div>
  );
};

export default Loadiing;
