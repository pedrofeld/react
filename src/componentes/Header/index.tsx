import { Wrapper, Container, Logo } from './styles'

import logo from '../../assets/logo.png'

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
        <div>
          <h1>Meu blog</h1>
          {message}
        </div>
        <Logo src={logo}/>
      </Container>
    </Wrapper>
  )
}

export default Header
