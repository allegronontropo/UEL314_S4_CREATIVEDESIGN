import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import "./styles/main.scss";

function App() {
  const [stage, setStage] = useState("intact");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y < 300) setStage("intact");
      else if (y < 700) setStage("cracked");
      else setStage("broken");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Hero stage={stage} />
      <Cards stage={stage} />
    </>
  );
}

export default App;
