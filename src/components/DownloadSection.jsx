import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion, useInView } from "framer-motion";

const DownloadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      className="download_app" 
      id="download_app" 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="download-buttons"
        initial={{ scale: 0.8 }}
        animate={{ scale: isInView ? 1 : 0.8 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.a
          href="#"
          className="purchase_button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3>
            <FontAwesomeIcon icon={faHeart} /> PURCHASE
          </h3>
          <h3 className="button_subblock">5$/mo</h3>
        </motion.a>
        <motion.a
          href="https://github.com/Nighty3098/OWL_APP/releases"
          className="download_button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3>
            <FontAwesomeIcon icon={faCloudArrowDown} /> DOWNLOAD
          </h3>
          <h3 className="button_subblock">TRIAL</h3>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default DownloadSection;
