import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
      }}
      className="relative z-10 flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 cursor-pointer select-none"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="pointer-events-none">
        {theme === "dark" ? (
          <Sun size={18} aria-hidden />
        ) : (
          <Moon size={18} aria-hidden />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
