import { Wrapper, Container, Title, Logo } from './styles'
import logo from '../../assets/logo.png'
import { useTheme } from '../../hooks/useTheme'

function Header() {
  const usuarioLogado = true;
  let message;
  const { toggleTheme } = useTheme();

  if (usuarioLogado) {
    message = <p>Bem-vindo de volta!</p>
  } else {
    message = <p>Por favor, faça login.</p>
  }

  return (
    <Wrapper>
      <Container>
        <div>
          <Title as="h2">Meu blog</Title>
          {message}
        </div>
        <Logo src={logo}/>
        <button onClick={toggleTheme}>Alternar tema</button>
      </Container>
    </Wrapper>
  )
}

export default Header
