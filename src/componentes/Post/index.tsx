import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../../types'
import { Avatar, Button, RoundedButton, StyledLink } from './styles'

function Post({
  id,
  titulo = 'Post sem título',
  imagem = 'https://picsum.photos/200/300',
  ingredientes = ['Receita sem ingredientes'],
  instrucoes = ['Receita sem instruções'],
  autor = 'Autor desconhecido',
  criadoEm = Date.now().toString(),
  descricao = 'Receita sem descrição',
  children,
}: IPost) {
  const temConteudoExtra = true
  let like = 0

  function curtir(titulo: string) {
    like++
    alert(`Você curtiu a receita: ${titulo}! Total de likes: ${like}.`)
  }

  // Em projetos em inglês, é comum usar "handle" para funções que lidam com eventos. No caso acima, seria "handleLike"

  return (
    <article>
      <div className="nome-e-foto-da-receita">
        <h3>
          <StyledLink to={`/post/${id}`}>{titulo}</StyledLink>
        </h3>
        <img src={imagem} alt="Imagem aleatória" />
      </div>

      <div className="ingredientes">
        <p>Ingredientes:</p>
        <p>{ingredientes.join(', ')}</p>
      </div>

      <div className="instrucoes">
        <p>Instruções:</p>
        <p>{instrucoes.join(' ')}</p>
      </div>

      <div className="autor-info">
        <h3>Autor:</h3>
        <Avatar
          src="https://github.com/pedrofeld.png"
          alt="Foto de perfil do autor"
        />
        <div>
          <span>{autor}</span>
          <span>{criadoEm}</span>
        </div>
        <p>{descricao}</p>

        {children}
      </div>

      {temConteudoExtra ? (
         <RoundedButton as="a" href={`/post/${id}`}>Leia mais</RoundedButton>
      ) : (
        <p>Nenhum conteúdo disponível</p>
      )}

      <Button primary onClick={() => curtir(titulo)}>Curtir</Button>
    </article>
  )
}

export default Post

/*
  Considerações:
  - children: permite passar conteúdo adicional entre as tags de abertura e fechamento do componente Post
  - nas entradas da função dá para definir valores padrão para as props, caso não sejam fornecidas
*/
