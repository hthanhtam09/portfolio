import React from "react";
import { cn } from "@/utils/cn";
import { ThemeMode } from "@/enums";
import { useTheme } from "next-themes";

export const SwitcherButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="text-dark dark:text-white overflow-hidden group px-2 py-1 inline-flex items-center gap-2 rounded-md tracking-tight font-medium relative cursor-pointer"
    >
      <span
        className={cn(
          "relative size-6 scale-75 bg-gradient-to-tr rounded-full"
        )}
      >
        <span
          className={cn(
            "absolute w-full h-full z-10 top-0 left-0 bg-gradient-to-tr rounded-full transition-color transform-gpu duration-500 from-indigo-400 to-sky-200",
            theme === ThemeMode.DARK ? "scale-100" : "scale-90"
          )}
        />
        <span
          className={cn(
            "absolute w-full h-full z-10 top-0 left-0 bg-gradient-to-tr rounded-full transition-color transform-gpu duration-500 from-rose-400 to-amber-300 dark:from-rose-600 dark:to-amber-600",
            theme === ThemeMode.LIGHT ? "opacity-100" : "opacity-0"
          )}
        />
        <span
          className={cn(
            "origin-top-right z-20 rounded-full bg-white group-hover:bg-neutral-100 dark:bg-neutral-800 group-hover:dark:bg-neutral-700 absolute top-0 right-0 size-4 transition-transform transform-gpu duration-500",
            theme === ThemeMode.DARK ? "scale-100" : "scale-0"
          )}
        />
      </span>
    </button>
  );
};
