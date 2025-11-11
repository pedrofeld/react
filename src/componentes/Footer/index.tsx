function Footer() {
  const message = true

  return (
    <footer>
      <p>₢ 2025 Meu blog</p>
      {message && <p>Obrigado por visitar meu blog!</p>}
    </footer>
  )
}

export default Footer
