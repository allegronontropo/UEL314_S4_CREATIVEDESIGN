import { motion } from "framer-motion";
import "./Hero.scss";
import Glass from "../Glass/Glass";

export default function Hero({ stage }) {
  return (
    <section className="hero">
      <div className="content">
        <h1>CYBERPUNK EXPERIENCE</h1>
        <p>A journey into the neon future</p>

        <motion.div
          className="robot"
          animate={{
            y: stage === "broken" ? 600 : 0,
            rotate: stage === "broken" ? 20 : 0,
          }}
          transition={{ duration: 1.2 }}
        >
          <img src="/robot.png" alt="robot" />
        </motion.div>
        <Glass stage={stage} />

        <div className={`glass ${stage}`} />
      </div>
    </section>
  );
}
