 //import { Fragment } from "react";
 import { Container, Links } from "./styles"

 import { Tag } from "../../components/Tag";
 import { Button } from "../../components/Button";
 import { Header } from "../../components/Header";
 import { Section } from "../../components/Section";
 import { ButtonText } from "../../components/ButtonText";
 
 /* a função deve ter o mesmo nome do arquivo; todo componente deve ter o nome inicado com letra Maiúscula*/
 export function Details() {
  return(
    <Container>
      <Header/>
      <h1>new Hello world</h1>
      <span>Teste</span>

      <ButtonText title="Excluir nota"/>

      <Section title="Links úteis"> 
        <Links>
          <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
          <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>

      <Section title="Marcadores"> 
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>

      <Button title= "Voltar"/>      
    </Container>
  ); /*<Button title="Login" loading/>     mesma coisa que escrever loading={true}*/
    /* title é a propriedade comum. O childrem é o que estiver dentro do section. children não é passado como uma propriedade comum.*/
 }
 