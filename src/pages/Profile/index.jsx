
import {useState} from "react";
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";

export function Profile(){
  const {user, updateProfile} = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();// deixar vazio por questão de segurança, exige q digitem a senha
  const [passwordNew, setPasswordNew] = useState();

  async function handleUpdate(){
    const user = {name, email, password: passwordNew, old_password: passwordOld,};
    await updateProfile({user});
  }

  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
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
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={event => setPasswordOld(event.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={event => setPasswordNew(event.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}