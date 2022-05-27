import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { FormWidget } from './WidgetForm';

export function Widget() {

  const { signed } = useAuth();

  return (
    <>
      <div className='flex'>

        <div className='bg-slate-100 w-3/4 p-6 text-black flex flex-col m-auto mt-5 text-center justify-center items-center'>
          <div className='flex justify-center p-2 w-full'>

            Bem Vindo, Deixe seu feedback
            <br />

          </div>
          {!signed &&
            <div className='flex mt-2'>
              <Link to='login' className='underline underline-offset-1'>Faça login para ver seus feedbacks </Link> 
            </div>
          }
        </div>
      </div>
      <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
        <Popover.Panel>
          <FormWidget />
        </Popover.Panel>
        <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
          <ChatTeardropDots className='w-6 h-6' />
          <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
            <span className='pl-2'></span>
            Feedback
          </span>
        </Popover.Button>
      </Popover>
    </>

  )
}