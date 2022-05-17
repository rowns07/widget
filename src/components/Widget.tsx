import { Popover, Switch } from '@headlessui/react';
import { ChatTeardropDots, Moon, Sun } from 'phosphor-react';
import { useState } from 'react';
import { FeedbackList } from './FeedbackList';
import { FormWidget } from './WidgetForm';

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);
  // function toggleWidgetVisibility() {
  //   setIsWidgetOpen(!isWidgetOpen);
  //   console.log(isWidgetOpen);
  // }

  const toggleTheme = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  }


  return (
    <div className={theme}>
      <div className='bg-slate-200 dark:bg-[#09090A] h-screen transition-all'>

        <Switch
          checked={darkSide}
          onChange={toggleTheme}
          className="bg-yellow-600 dark:bg-yellow-300 p-2 m-5 text-blue-900 rounded-md"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </Switch>

        <div className='bg-zinc-400 dark:bg-zinc-800 p-5 m-4 text-red-300 dark:text-red-700 '>

          {theme === "light" ? "light mode" : "dark mode"}
        </div>
        <FeedbackList />
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
          <Popover.Panel>
            <FormWidget />
          </Popover.Panel>

          {/* Utilizado quando tem mais de uma instrução */}
          {/* {isWidgetOpen ? <p>Hello Word</p> : null} */}

          {/* &COMERCIAL Utilizado quando existe apenas uma instrução */}
          {/* {isWidgetOpen && <p>Hello Word</p>} */}


          <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
            <ChatTeardropDots className='w-6 h-6' />

            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
              <span className='pl-2'></span>
              Feedback
            </span>
          </Popover.Button>
        </Popover>
      </div>

    </div>
  )
}