import { List, Plus, SignOut } from "phosphor-react";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="bg-slate-300 dark:bg-slate-700 p-4">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium p-2 uppercase">
        <Link to='/list'
          className="py-2 pr-4 pl-3 text-white rounded  md:text-zinc-400 text-lg  md:p-0 dark:text-white flex items-center justify-center">
          <List alt="SAIR" size='32' className="mr-2" />Feedbacks
        </Link>
        <Link to='/widget' className="py-2 pr-4 pl-3 text-white rounded md:text-zinc-400 text-lg  md:p-0 dark:text-white 0 flex items-center justify-center hover:text-yellow-500 transition-all">
          <Plus alt="SAIR" size='32' className="mr-2" />  New Feedback
        </Link>
        <Link to='/' className="py-2 pr-4 pl-3 text-white hover:text-yellow-500 rounded md:text-zinc-400 text-lg  md:p-0 dark:text-white flex items-center justify-center transition-all">
          <SignOut alt="SAIR" size='32' className="mr-2" />
          {/* <span> */}

          Sair
          {/* </span> */}
        </Link>
      </ul>
    </nav >
  )
}