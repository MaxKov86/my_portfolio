import { motion } from "framer-motion";

export default function TechStack() {
  const stack = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🌬️" },
    { name: "Framer Motion", icon: "🎞️" },
    { name: "Vite", icon: "⚡" },
    { name: "Three.js", icon: "3D" },
  ];

  return (
    <section className="py-20 px-6 text-center bg-white dark:bg-zinc-950">
      <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">
        Технології, з якими працюю
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {stack.map((item) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -4,
              transition: {
                type: "tween",
                duration: 0.1,
                ease: "easeOut",
              },
            }}
            className="px-6 py-4 bg-gray-100/60 dark:bg-zinc-900/60 backdrop-blur-md border border-gray-300 dark:border-zinc-800 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400/40 transition-colors duration-150 cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              className="text-3xl mb-2"
            >
              {item.icon}
            </motion.div>
            <div className="font-medium text-gray-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-150">
              {item.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
