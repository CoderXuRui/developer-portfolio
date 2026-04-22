"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-background-alt transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-foreground-muted hover:text-foreground transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-foreground-muted hover:text-foreground transition-colors" />
      )}
    </button>
  );
}
