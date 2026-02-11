import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layout, Smartphone, Code } from "lucide-react";

const projects = [
  {
    title: "E-commerce Dashboard",
    description: "Інтерактивний дашборд для управління продажами з анімаціями.",
    tags: ["React", "Tailwind", "Zustand", "Framer Motion"],
    live: "#",
    github: "#",
    icon: <Layout size={28} />,
  },
  {
    title: "3D Product Viewer",
    description:
      "Інтерактивний перегляд товарів з Three.js та React Three Fiber.",
    tags: ["React", "Three.js", "Tailwind", "GSAP"],
    live: "#",
    github: "#",
    icon: <Smartphone size={28} />,
  },
  {
    title: "Personal Finance App",
    description:
      "Мобільний веб-додаток для трекінгу витрат з локальним сховищем та графіками.",
    tags: ["React", "Chart.js", "Tailwind", "IndexedDB"],
    live: "#",
    github: "#",
    icon: <Code size={28} />,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100/50 dark:bg-zinc-950/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Обрані проєкти
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: {
                  type: "tween",
                  duration: 0.15, // Дуже коротка тривалість
                  ease: "easeOut", // Швидкий початок, плавний кінець
                },
              }}
              className="group relative bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md border border-gray-300 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-500 dark:hover:border-cyan-400/40 transition-colors duration-150 cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-zinc-800 dark:to-zinc-950 flex items-center justify-center text-gray-600 dark:text-cyan-400/50 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-150">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-150">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-zinc-400 mb-4 group-hover:text-gray-800 dark:group-hover:text-zinc-300 transition-colors duration-150">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.1 }}
                      className="px-3 py-1 bg-gray-200 dark:bg-zinc-800 rounded-full text-sm text-gray-700 dark:text-cyan-300/80 hover:bg-gray-300 dark:hover:bg-zinc-700"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <motion.a
                    href={project.live}
                    whileHover={{ x: 2, y: -2 }}
                    transition={{ duration: 0.1 }}
                    className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
                  >
                    Live <ArrowUpRight size={16} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1 }}
                    className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
                  >
                    GitHub <Github size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
