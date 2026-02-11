import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-white dark:bg-zinc-950">
      <div className="text-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl md:py-1.5 font-extrabold  leading-tight tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Welcome to my portfolio page
        </motion.h1>
        <p className="mt-6 text-3xl text-gray-700 dark:text-zinc-100 opacity-90">
          Frontend Developer
        </p>
        <div className="mt-10 flex gap-6 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition"
          >
            Проєкти
          </a>
          <a
            href="mailto:your@email.com"
            className="px-8 py-4 border border-cyan-500/50 dark:border-cyan-400/50 text-gray-700 dark:text-zinc-300 rounded-full hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition"
          >
            Зв'язатися
          </a>
        </div>
      </div>
    </section>
  );
}
