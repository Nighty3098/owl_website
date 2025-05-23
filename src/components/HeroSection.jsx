import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SloganSection } from "./SloganSection";
import OwlIcon from "./OwlIcon";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <motion.div
        className="main_block"
        ref={ref}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0px", width: "auto", height: "auto", alignContent: "center", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
          <h2>
            Meet Your
            <br />
            New Personal
            <br />
            Productivity App
          </h2>
          <SloganSection />
        </div>
        <OwlIcon />
      </motion.div>
    </div>
  );
};
