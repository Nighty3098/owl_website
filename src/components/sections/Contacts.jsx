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
    <motion.div
      className="contacts"
      id="contacts"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-row flex-align-end flex-justify-end"
      >
        <div className="contacts_badge_block">
          {socials.map((social, index) => (
            <motion.a
              key={`${social.link}-${social.icon}`}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="contact_button">
                <FontAwesomeIcon icon={social.icon} className="social-icon" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contacts;
