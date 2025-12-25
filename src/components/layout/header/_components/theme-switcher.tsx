"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2 p-4">
      <Sun className="h-5 w-5 text-slate-400" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked: boolean) => setTheme(checked ? "dark" : "light")}
        className="bg-teal-600"
      />
      <Moon className="h-5 w-5 text-slate-400" />
    </div>
  );
}
