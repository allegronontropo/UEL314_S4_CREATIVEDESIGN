import { motion } from "framer-motion";
import "./Glass.scss";

export default function Glass({ stage }) {
  return (
    <motion.div
      className="glass"
      animate={{
        y: stage === "broken" ? 200 : 0,
        rotate: stage === "broken" ? 10 : 0,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {}
      <svg
        className={`cracks ${stage}`}
        viewBox="0 0 200 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="10" x2="200" y2="10" />
        <line x1="50" y1="0" x2="50" y2="20" />
        <line x1="150" y1="0" x2="150" y2="20" />
      </svg>
    </motion.div>
  );
}
