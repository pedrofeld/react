function Header() {
    const usuarioLogado = true;
    let message;

    if (usuarioLogado) {
        message = <p>Bem-vindo de volta!</p>;
    } else {
        message = <p>Por favor, faça login.</p>;
    }

    return (
        <header>
            <h1>Meu blog</h1>
            {message}
        </header>
    )
}

export default Header;