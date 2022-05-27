import {
  getAuth, onAuthStateChanged, signOut
} from 'firebase/auth';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

type AuthContextProps = {
  children: ReactNode
}

type LoginProps = {
  email: string;
  password: string
}

interface AuthContextData {
  signed: boolean;
  Login?(): Promise<LoginProps>;
  SignOut: () => void;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const auth = getAuth();
  let loggedUser: boolean = false;
  const [signed, setSigned] = useState<boolean>(false);

  useEffect(() => {

    onAuthStateChanged(auth, user => {
      if (user !== null) {
        loggedUser = true;
        setSigned(true)

      } else {
        let loggedUser = false;
        setSigned(false)
      }
    })
  })

  function SignOut() {
    signOut(getAuth()).then(res => {
      console.log('SAIU')
    })
  }

  return (
    <AuthContext.Provider value={{ signed, SignOut }}>
      {children}
    </AuthContext.Provider >
  )
}

export default AuthContext;