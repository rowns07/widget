import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { WarningCircle } from "phosphor-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Login() {

  const context = useAuth();
  const navegar = useNavigate();
  const auth = getAuth();

  type dataProps = {
    email: string;
    password: string
  }
  const [email, setEmail] = useState<dataProps>();
  const [password, setPassword] = useState<dataProps>();

  const [isInvalidUser, setIsInvalidUser] = useState<boolean>(false)



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(resp => {
        navegar('/widget')
        console.log('entrou', resp)
      })
      .catch((erro) => {
        setIsInvalidUser(true);
        console.log('DEU ERRO', erro)
      })

  };

  return (
    <>

      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">

          {isInvalidUser &&
            <div className="flex items-center justify-center bg-red-200 p-2 text-red-700 font-serif text-center">
              <WarningCircle size={32} />
              <h2 className="p-3"> Usuario ou senha invalida</h2>
            </div>
          }
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
          >

            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address"
                  // name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password"
                  // name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password" />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                </div>
              </div> */}

            <div>
              <button type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <!-- Heroicon name: solid/lock-closed --> */}
                  {/* <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg> */}
                </span>
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>

    </>
  )
}