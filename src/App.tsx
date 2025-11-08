import { Header } from './componentes/Header'
import { Footer } from './componentes/Footer'

export function App() {
  const hello = "Hello, React!"
  return (
    <> 
      <Header/>

      <main>
        <h3>{hello}</h3>
        <p>Estamos aprendendo React criando um blog de receitas.</p>

        <article>
          <h3>Receitas</h3>
          <img src="https://picsum.photos/200/200" alt="Imagem aleatória"/>
          <p>Bloco de chocolate</p>

          <div>
            <img src="https://github.com/pedrofeld.png" alt="Foto de perfil do autor"/>
            <div>
              <span>Pedro Feld</span>
              <span>08/11/2025</span>
            </div>
            <p>Delicioso bolo de chocolate</p>
          </div>
        </article>
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