import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faDiscord,
  faReddit,
  faSignalMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useInView } from "framer-motion";

const socials = [
  { icon: faTelegram, link: "https://t.me/Night3098" },
  { icon: faDiscord, link: "https://discord.gg/#9707" },
  { icon: faReddit, link: "https://www.reddit.com/user/DEVELOPER0x31/" },
  {
    icon: faSignalMessenger,
    link: "https://signal.me/#eu/XJMqmO9JXZQCwYJIpzjOS741ZnGsLYOQhGqMfpS4lB-8PTSQVmRAbqFIvOrepYiK",
  },
];

const Contacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div className="contacts" id="contacts" ref={ref}>
      <h1>CONTACTS</h1>
      <motion.div>
        <div className="contacts_badge_block">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact_button">
                <FontAwesomeIcon icon={social.icon} className="social-icon" />
              </div>
            </motion.a>
          ))}
        </div>
        <motion.a
          href="https://discord.gg/tnHSEc2cZv"
          className="btn-slide"
          style={{ marginTop: "30px" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="circle">
            <FontAwesomeIcon icon={faDiscord} />
          </span>
          <span className="title">DS SERVER</span>
          <span className="title-hover">CLICK</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contacts;
