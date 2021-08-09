import React, { createContext, useState, useContext } from "react";

interface IAuthContex {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContex>({} as IAuthContex);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@minha-carteira:logged");

    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
      if (email === 'dm7@dm7sistemas.com.br' && password === '12345678') {
          localStorage.setItem('@minha-carteira:logged', 'true')
          setLogged(true);
      } else {
          alert('Senha ou usuário inválidos!')
      }
  }

  const signOut = () => {
      localStorage.removeItem('@minha-carteira:logged');
      setLogged(false);
  }

  return (
      <AuthContext.Provider value={{logged, signIn, signOut}}>
          {children}
      </AuthContext.Provider>
  );

}

function useAuth(): IAuthContex {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };