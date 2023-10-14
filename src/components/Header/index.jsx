import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles"

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/DuPoisk.png" alt="User profile photo" />

        <div> 
          <span>Bem-vindo</span> 
          <strong>Juliana Duarte</strong>
        </div>
      </Profile>

    
      <Logout>
        <RiShutDownLine/>
      </Logout>
      
    </Container>
  );
}