import { Routes, Route } from "react-router-dom"; /*"Routes" vai envolver todas as minhas "Route" */

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";


export function AuthRoutes(){
  return(
    <Routes> 
      <Route path="/" element={<SignIn/>} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}
/*
<Route path="/" significa qual o endereço
        element={<Home />} />   significa qual elemento quero renderizar, qual elemento quero exibir
*/ 