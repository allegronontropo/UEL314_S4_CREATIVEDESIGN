import { motion } from "framer-motion";
import "./Cards.scss";

export default function Cards({ stage }) {
  return (
    <section className="cards">
      <motion.div
        className="card highlight"
        initial={{ y: 100, opacity: 0 }}
        animate={stage === "broken" ? { y: 0, opacity: 1 } : {}}
      >
        <h3>The Assassin</h3>
        <p>Stealth and precision.</p>
      </motion.div>

      <div className="card">
        <h3>Street Merc</h3>
        <p>Guns, grit, neon nights.</p>
      </div>

      <div className="card">
        <h3>Net Runner</h3>
        <p>Breaking firewalls at light speed.</p>
      </div>
    </section>
  );
}
