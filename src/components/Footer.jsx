export default function Footer() {
  return (
    <footer className="py-12 text-center text-gray-600 dark:text-zinc-500 border-t border-gray-300 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <p>© {new Date().getFullYear()} Максим • Frontend Developer</p>
      <p className="mt-2 text-sm">
        Зроблено з ❤️ на React, Vite & Tailwind CSS
      </p>
    </footer>
  );
}
