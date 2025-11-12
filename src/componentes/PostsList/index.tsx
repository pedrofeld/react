import { posts } from '../../posts'
import { IPost } from '../../types'
import Post from '../Post'
import { Wrapper, Container, Title } from './styles'

export default function PostsList({ posts }: { posts: IPost[] }) {
  return (
    <Wrapper>
      <Container>
        <Title>
          <h1>Posts recentes</h1>
          <span>Escolhemos a dedo nossos artigos favoritos</span>
        </Title>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            titulo={post.titulo}
            imagem={post.imagem}
            ingredientes={post.ingredientes}
            instrucoes={post.instrucoes}
            autor={post.autor}
            criadoEm={post.criadoEm}
            descricao={post.descricao}
          />
        ))}
      </Container>
    </Wrapper>
  )
}
