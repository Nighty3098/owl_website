import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const TimelineItem = ({ text, status, index }) => {
  const statusColors = {
    completed: "var(--green)",
    not_completed: "var(--red)",
    in_progress: "var(--purple)",
  };

  return (
    <motion.div
      className="timeline-content"
      style={{
        borderLeft: `20px solid ${statusColors[status] || "var(--color1)"}`,
      }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
      <span className="status-text">
        {status === "completed"
          ? "DONE"
          : status === "not_completed"
            ? "NS"
            : "IN DEV"}
      </span>
    </motion.div>
  );
};

const Timeline = () => {
  const tasks = [
    { text: "Basic UI/UX", status: "completed" },
    { text: "The func of working with tasks", status: "completed" },
    { text: "The func of working with projects", status: "completed" },
    { text: "Statistics Window", status: "completed" },
    { text: "The backend", status: "in_progress" },
    { text: "Databases", status: "in_progress" },
    { text: "Create registration form", status: "in_progress" },
    { text: "Validate user data", status: "in_progress" },
    { text: "User Registration", status: "not_completed" },
    { text: "Implement email confirmation", status: "not_completed" },
    { text: "API Implementation", status: "not_completed" },
    { text: "The Frontend + Backend bundle", status: "not_completed" },
    { text: "Subscription functionality", status: "not_completed" },
    { text: "Testing", status: "not_completed" },
    { text: "Unit testing", status: "not_completed" },
    { text: "Integration testing", status: "not_completed" },
    { text: "UI testing", status: "not_completed" },
    { text: "Placement on the server", status: "not_completed" },
    { text: "Setup CI/CD", status: "not_completed" },
    { text: "Configure server environment", status: "not_completed" },
    { text: "Attracting an audience", status: "not_completed" },
  ];

  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="timeline hide-line"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.8 }}
    >
      {tasks.slice(0, showAll ? tasks.length : 4).map((task, index) => (
        <TimelineItem
          key={index}
          text={task.text}
          status={task.status}
          index={index}
        />
      ))}
      <motion.button
        onClick={() => setShowAll((prev) => !prev)}
        className="show-more-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {showAll ? "HIDE" : "SHOW ALL"}
      </motion.button>
    </motion.div>
  );
};

export const DevelopmentProgressPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="content"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        DEVELOPMENT PROGRESS
      </motion.h1>
      <Timeline />
    </motion.div>
  );
};
