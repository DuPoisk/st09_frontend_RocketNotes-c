 import { Fragment } from "react"
 import { Container } from "./styles"

 import { Header } from "../../components/Header"
 import { Button } from "../../components/Button"
 
 /* a função deve ter o mesmo nome do arquivo; todo componente deve ter o nome inicado com letra Maiúscula*/
 export function Details() {
  return(
    <Container>
      <Header/>
      <h1>new Hello world</h1>
      <span>Teste</span>

     
      <Button title= "Voltar"/>
      
    </Container>
  ); /*<Button title="Login" loading/>     mesma coisa que escrever loading={true}*/
 }
 