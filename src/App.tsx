import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Post from './componentes/Post'

export function App() {
  const hello = "Hello, React!"
  return (
    <> 
      <Header/>

      <main>
        <h3>{hello}</h3>
        <p>Estamos aprendendo React criando um blog de receitas.</p>

        <h2>Receitas:</h2>
        <Post/>
        <Post/>
        <Post/>
      </main>

      <Footer/>
    </>
  )
}

/*
  Considerações:
  - <> fragment vazio, substitui uma div desnecessária (que seria um nó a mais no DOM e pioraria a performance ou afetaria a estilização)
  - Elementos como variáveis e comentários precisam estar entre chaves {// comentário}
  - O link https://picsum.photos/ fornece imagens aleatórias para testes, o "/200/300" define a largura e altura da imagem em pixels
  -
*/