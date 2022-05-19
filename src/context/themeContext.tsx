import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextProps = {
  theme: string,
  darkSide: boolean,
  changedTheme: () => void
}

type ThemeContextProviderProps = {
  initialTheme?: string,
  children: ReactNode,
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeContextProvider({
  children }: ThemeContextProviderProps) {

  const initialTheme = localStorage.getItem('tema') ?? 'light'
  const [theme, setTheme] = useState<string>(initialTheme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  const [darkSide, setDarkSide] = useState<boolean>(colorTheme === 'light' ? true : false);

  const getHTMLElement = window.document.documentElement;

  function changedTheme() {
    setTheme(colorTheme);
    localStorage.setItem('tema', colorTheme);

    if (theme == 'dark') {
      getHTMLElement.classList.remove('dark');
    } else {
      getHTMLElement.classList.add('dark');
    }
  }

  useEffect(() => {

    if (theme == 'dark') {
      getHTMLElement.classList.add('dark');
    } else {
      getHTMLElement.classList.remove('dark');
    }
  })

  return (
    <ThemeContext.Provider value={{ theme, darkSide, changedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}