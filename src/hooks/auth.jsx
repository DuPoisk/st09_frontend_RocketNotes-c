import {createContext, useContext, useState} from "react";
import { api } from "../services/api";
export const AuthContext = createContext({}); // dentro de {} vai um valor default. mas com nao tenho nada para deixar como default, ele permanece vazio, apenas

function AuthProvider ({children}) { // children são todas as rotas da aplicação
  const[data, setData] = useState({});
  
  async function signIn({email, password}){// FUNÇÃO DE AUTENTICAÇÃO
    try { // tratamento de exceções. try para o caso de funcionar
      const response = await api.post("/sessions", {email, password});
      const {user, token} = response.data;
      
      api.defaults.headers.authorization = "Bearer ${token}";
      setData({user, token});// atualiza o conteúdo do usuário

    }catch (error){ // catch para o caso de não dar certo
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível entrar.");
      }
    }
  }

  return(
    <AuthContext.Provider value={{signIn, user: data.user}}> 
        {children}
      </AuthContext.Provider>
  )// estou compartilhando no contexto o usuário, que é o conteúdo do estado useState
}

function useAuth(){// useAuth é um hook
  const context = useContext(AuthContext);

  return context

}

export {AuthProvider, useAuth};