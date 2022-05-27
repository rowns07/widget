import { Switch } from "@headlessui/react";
import { Moon, Sun } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export function ThemeButton() {
  const { theme, darkSide,changedTheme } = useContext(ThemeContext);

  return (
    <>
      <Switch
        checked={darkSide}
        onChange={changedTheme}
        className="bg-yellow-600 dark:bg-yellow-300 p-2 m-5 text-blue-900 rounded-md absolute top-0 right-0"
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </Switch>

    </>
  )
}