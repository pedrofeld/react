export function App() {
  const hello = "Hello, React!"
  return (
    <> 
      <h1>{hello}</h1>
      <h2>Estamos aprendendo React.</h2>
    </>
  )
}

/*
  Considerações:
  - <> fragment vazio, substitui uma div desnecessária (que seria um nó a mais no DOM e pioraria a performance ou afetaria a estilização)
  - Elementos como variáveis e comentários precisam estar entre chaves {// comentário}
  -
*/