import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import GlobalStyles from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import themes from './themes'

export function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

/*
  Considerações:
  - <> fragment vazio, substitui uma div desnecessária (que seria um nó a mais no DOM e pioraria a performance ou afetaria a estilização)
  - Elementos como variáveis e comentários precisam estar entre chaves {// comentário}
  - O link https://picsum.photos/ fornece imagens aleatórias para testes, o "/200/300" define a largura e altura da imagem em pixels
  - Esses atributos do Post são chamados de props (propriedades) e são passados para o componente Post
*/
