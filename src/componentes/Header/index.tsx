import { Wrapper, Container} from './styles'

function Header() {
  const usuarioLogado = true
  let message

  if (usuarioLogado) {
    message = <p>Bem-vindo de volta!</p>
  } else {
    message = <p>Por favor, faça login.</p>
  }

  return (
    <Wrapper>
      <Container>
        <h1>Meu blog</h1>
        {message}
      </Container>
    </Wrapper>
  )
}

export default Header
