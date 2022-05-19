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
        className="bg-yellow-600 dark:bg-yellow-300 p-2 m-5 text-blue-900 rounded-md"
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </Switch>

      <div className='bg-zinc-400 dark:bg-zinc-800 p-5 m-4 text-red-300 dark:text-red-700 '>

        {theme === "light" ? "light -- mode" : "dark -- mode"}
      </div>
    </>
  )
}