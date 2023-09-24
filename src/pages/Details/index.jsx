 import { Fragment } from "react"
 import { Container } from "./styles"

 import { Button } from "../../components/Button"
 
 /* a função deve ter o mesmo nome do arquivo; todo componente deve ter o nome inicado com letra Maiúscula*/
 export function Details() {
  return(
    <Container>
      <h1>new Hello world</h1>
      <span>Teste</span>

      <Button title="Entrar" />
      <Button title="Cadastrar" />
      <Button title= "Voltar"/>
      <Button title="Login" loading/>
    </Container>
  ); /*<Button title="Login" loading/>     mesma coisa que escrever loading={true}*/
 }
 