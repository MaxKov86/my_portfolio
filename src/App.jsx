import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { Sun, Moon } from "lucide-react";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-300 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 transition-all"
      aria-label="Перемкнути темну/світлу тему"
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-zinc-700" />
      )}
    </button>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative bg-stone-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen font-sans selection:bg-orange-100 selection:text-orange-900 dark:selection:bg-amber-200/30 dark:selection:text-amber-100">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 origin-left z-50"
        style={{ scaleX }}
      />

      <ThemeToggleButton />

      <Hero />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
}
