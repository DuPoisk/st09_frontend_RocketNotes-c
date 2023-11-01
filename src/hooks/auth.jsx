import {createContext, useContext, useState, useEffect} from "react";
import { api } from "../services/api";
export const AuthContext = createContext({}); // dentro de {} vai um valor default. mas com nao tenho nada para deixar como default, ele permanece vazio, apenas

function AuthProvider ({children}) { // children são todas as rotas da aplicação
  const[data, setData] = useState({});
  
  async function signIn({email, password}){// FUNÇÃO DE AUTENTICAÇÃO
    try { // tratamento de exceções. try para o caso de funcionar
      const response = await api.post("/sessions", {email, password});
      const {user, token} = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user)); // usei a chave como sendo o nome @rocketnotes, já que é o nome da aplicação
      localStorage.setItem("@rocketnotes:token", token);
      
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

  useEffect (() => {// vai buscar as infos no local Storage
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if(token && user){
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({
        token, 
        user: JSON.parse(user) // pego os dados do usuário q estão armazenados no formato de texto e voltei para o formato JSON
      })
    }
    
  }, []);


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