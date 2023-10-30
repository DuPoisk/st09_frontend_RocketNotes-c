import {createContext, useContext} from "react";

export const AuthContext = createContext({}); // dentro de {} vai um valor default. mas com nao tenho nada para deixar como default, ele permanece vazio, apenas

function AuthProvider ({children}) { // children são todas as rotas da aplicação
  return(
    <AuthContext.Provider value={{name: "rodrigo", email: "rodrigo@email.com"}}>
        {children}
      </AuthContext.Provider>
  )
}

function useAuth(){// useAuth é um hook
  const context = useContext(AuthContext);

  return context

}

export {AuthProvider, useAuth};