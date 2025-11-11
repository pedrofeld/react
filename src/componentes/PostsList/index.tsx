import { posts } from '../../posts'
import { IPost } from '../../types'
import Post from '../Post'

export default function PostsList({ posts }: { posts: IPost[] }) {
  return (
    <>
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
    </>
  )
}
