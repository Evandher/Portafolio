import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Cambiar tema"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:bg-white/10"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-yellow-400" />
      ) : (
        <Moon size={18} className="text-slate-700" />
      )}
    </button>
  );
};

export default ThemeToggle;