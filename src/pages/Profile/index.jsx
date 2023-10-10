
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";

export function Profile(){
  return(
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft/>
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/DuPoisk.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input /*  não usarei componente input, pois esse input vai ficar invisivel, so vai ser vir pra eu abrir a janela de carregar a imagem.*/
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}