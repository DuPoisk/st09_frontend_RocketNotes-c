import { useState } from "react";
import { Link } from "react-router-dom";

import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import {Textarea} from "../../components/Textarea";
import {NoteItem} from "../../components/NoteItem";
import {Section} from "../../components/Section";
import {Button} from "../../components/Button";

import {Container, Form} from "./styles";

export function New(){
  const[links, setLinks] = useState([]); // esse estado guarda todos os links
  const[newLink, setNewLink] = useState(""); // estado para guardar o link adicionado no momento

  const[tags, setTags] = useState([]); // esse estado guarda todas as tags
  const[newTag, setNewTag] = useState(""); // estado para guardar a tag adicionada no momento


  function handleAddLink(){
    setLinks(prevState=>[...prevState, newLink]); // acesso o conteúdo anterior ao estado, e monto um novo vetor com tudo o que tinha antes mais o novo link
    setNewLink(""); // "reseto" o estado
  }

  function handleRemoveLink (deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted)); //pega o link e verifica onde no link é diferente do que eu estou deletando. Isso vai remover o link deletado e devolverá uma lista nova sem esse link
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag(""); // "reseto o campo". Depois que eu tiver adicionado a tag, o campo para escrever volta a ficar vazio para eu escrever outra info
  }

  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título"/>
          <Textarea placeholder="Observações"/>

          <Section title="Links úteis">
            {
              links.map((link, index) => ( // essa parte serve para que os links salvos fiquem VISÍVEIS assim que eu adicioná-los
                <NoteItem 
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)} // uso arrow function pq é uma função com parâmetro. Senão vai ficar tentando executar de forma automática sozinho.
                />
              ))
            }

            <NoteItem  //serve para adicionar os links efetivamente
              isNew 
              placeholder="Novo link" 
              value={newLink}
              onChange={event => setNewLink(event.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {// uso chaves porque estou usando uma lista para percorer o conteúdo da variável
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => { }}
                  />             

                ))

              }
              <NoteItem 
                isNew 
                placeholder="Nova tag"
                onChange={event => setNewTag(event.target.value)}
                value={newTag}
                onClick= {handleAddTag}
              />

            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}

