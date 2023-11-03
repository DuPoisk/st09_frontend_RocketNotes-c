import { useState, useEffect } from "react";
import {FiPlus} from "react-icons/fi";
import {Container, Brand, Menu, Search, Content, NewNote} from "./styles";
import { api } from "../../services/api";

import {Note} from "../../components/Note";
import {Input} from "../../components/Input";
import {Header} from "../../components/Header";
import {Section} from "../../components/Section";
import {ButtonText} from "../../components/ButtonText";

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagSelected(tagName){ // função para lidar com a seleção da tag
    const alreadySelected = tagsSelected.includes(tagName);
    
    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags); // retorna todas as tags, menos aquela que eu acabei de desmarcar
    }else{
      setTagsSelected(prevState => [...prevState, tagName]); // vai retornar selecionadas todas as tags que foram clicadas
    }
  } 


  useEffect(() => { // obs. useEffect não aceita função assíncrona, por isso devo criar uma função fora dele, que seja async e depois chamá-la dentro do useEffect
    
    async function fetchTags(){ // por isso posso criar essa função aqui dentro e em seguida, chamo a função aqui dentro do useEffect
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []); // deixo o array vazio pois quero buscar as tags apenas 1 vez, e não ficar buscando essa info diversas vezes

  return(
    
    <Container>
      <Brand>
      <h1>Rocketnotes</h1>      
      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText 
          title="Todos" 
          onClick={() => handleTagSelected("all")}
          $isactive={tagsSelected.length === 0} // verifica o tamanho, e assim, se for zero, verifica que não tem nenhuma coisa dentro do array 
          />
        </li>
        {
          tags && tags.map(tag => ( // se existir tags, então o map vai percorrer elas 
            <li key={String(tag.id)}> 
              <ButtonText 
                title={tag.name} 
                onClick={() => handleTagSelected(tag.name)}
                $isactive={tagsSelected.includes(tag.name)} // se a tag existir la dentro, retorna verdadeiro

              />
            </li> 
          ))           
        }
      </Menu>


      <Search>
        <Input placeholder="Pesquisar pelo título"/>        
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React Modal',
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'rocketseat'}
            ] 
          }}/>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Criar nota
      </NewNote>
    </Container>
  )
}