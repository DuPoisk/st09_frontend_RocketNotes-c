import {FiPlus} from "react-icons/fi";
import {Container, Brand, Menu, Search, Content, NewNote} from "./styles";

import {Header} from "../../components/Header"
import {ButtonText} from "../../components/ButtonText"

export function Home() {
  return(
    
    <Container>
      <Brand>
      <h1>Rocketnotes</h1>
      
      </Brand>

      <Header></Header>

      <Menu>
        <li><ButtonText title="Todos" $isactive/></li> 
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Node"/></li>        
      </Menu>


      <Search>        
      </Search>

      <Content>
      </Content>

      <NewNote>
        <FiPlus/>
        Criar nota
        
      </NewNote>


    </Container>
  )
}