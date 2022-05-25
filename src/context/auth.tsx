import React, { createContext, ReactNode } from 'react';
import { api } from '../lib/api';
import {
  // Auth, 
  signOut,
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'

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

  function SignOut() {
    signOut(getAuth()).then(res => console.log('SAIU'))
  }

  return (
    <AuthContext.Provider value={{ signed: false, SignOut }}>
      {children}
    </AuthContext.Provider >
  )
}

export default AuthContext;