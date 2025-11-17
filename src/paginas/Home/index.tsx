import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Post from '../../componentes/Post'
import { posts } from '../../posts'
import PostsList from '../../componentes/PostsList'
import { Search, Container } from './styles'
import { ChangeEvent, useState } from 'react'

export function Home() {
  const hello = 'Hello, React!'

  const [filterText, setFilterText] =  useState('')
  const [filteredPosts, setFilteredPosts] = useState(posts)

  function filtrarTexto(event: ChangeEvent<HTMLInputElement>){
    setFilterText(event.target.value)
  }

  function enviarFormulario(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    const filtros = posts.filter((post) =>
      post.titulo?.toLowerCase().includes(filterText.toLowerCase()),
    )

    setFilteredPosts(filtros)
  }

  return (
    <>
      <Header />

      <Search onSubmit={enviarFormulario}>
        <Container>
          <input
            type="text"
            placeholder="Filtrar posts por título"
            onChange={filtrarTexto}
          />
          <button>Filtrar</button>
        </Container>
      </Search>

      <main>
        <h3>{hello}</h3>
        <p>Estamos aprendendo React criando um blog de receitas.</p>

        <h2>Receitas:</h2>

        <PostsList posts={filteredPosts} />
      </main>

      <Footer />
    </>
  )
}
