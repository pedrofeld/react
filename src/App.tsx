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
        <Post
          id={1}
          titulo="Bolo de Chocolate"
          imagem="https://picsum.photos/200/300"
          ingredientes={["2 xícaras de farinha de trigo", "1 xícara de açúcar", "1 xícara de cacau em pó", "1 colher de chá de fermento em pó", "1/2 colher de chá de sal", "1 xícara de leite", "1/2 xícara de óleo vegetal", "2 ovos", "3 colheres de sopa de achocolatado em pó"]}
          instrucoes={["Pré-aqueça o forno a 180°C.", "Misture os ingredientes secos.", "Adicione os ingredientes líquidos e mexa bem.", "Despeje a massa em uma forma untada.", "Asse por 35-40 minutos ou até que um palito saia limpo.", "Deixe esfriar antes de desenformar e decorar a gosto."]}
          autor="Pedro Feld"
          criadoEm="08/11/2025"
          descricao="Um delicioso bolo de chocolate"
        >
          <p>
            <strong>Comentário:</strong> Esse bolo é incrível para festas de aniversário!
          </p>
        </Post>

        <Post
          id={2}
          titulo="Bolo de Cenoura"
          imagem="https://picsum.photos/200/300"
          ingredientes={["2 xícaras de farinha de trigo", "1 xícara de açúcar", "1 xícara de cenoura ralada", "1/2 xícara de óleo vegetal", "2 ovos", "1 colher de chá de fermento em pó"]}
          instrucoes={["Pré-aqueça o forno a 180°C.", "Misture os ingredientes secos.", "Adicione os ingredientes líquidos e mexa bem.", "Despeje a massa em uma forma untada.", "Asse por 35-40 minutos ou até que um palito saia limpo.", "Deixe esfriar antes de desenformar e decorar a gosto."]}
          autor="Pedro Feld"
          criadoEm="09/11/2025"
          descricao="Um delicioso bolo de cenoura"
        />

        <Post
          id={3}
          titulo="Bolo de Baunilha"
          imagem="https://picsum.photos/200/300"
          ingredientes={["2 xícaras de farinha de trigo", "1 xícara de açúcar", "1/2 xícara de manteiga", "2 ovos", "1 colher de sopa de essência de baunilha", "1 colher de chá de fermento em pó"]}
          instrucoes={["Pré-aqueça o forno a 180°C.", "Misture os ingredientes secos.", "Adicione os ingredientes líquidos e mexa bem.", "Despeje a massa em uma forma untada.", "Asse por 35-40 minutos ou até que um palito saia limpo.", "Deixe esfriar antes de desenformar e decorar a gosto."]}
          autor="Pedro Feld"
          criadoEm="10/11/2025"
          descricao="Um delicioso bolo de baunilha"
        />
       
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
  - Esses atributos do Post são chamados de props (propriedades) e são passados para o componente Post
*/