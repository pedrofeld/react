import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Post from '../../componentes/Post'
import { posts } from '../../posts'

export function Home() {
    const hello = "Hello, React!"

    let textoDoFiltro = "";

    function filtrarTexto(evento: React.ChangeEvent<HTMLInputElement>) {
        textoDoFiltro = evento.target.value.toLowerCase()
        console.log("Texto do filtro:", textoDoFiltro)
    }

    function enviarFormulario(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()

        const postsFiltrados = posts.filter((post) => 
            post.titulo?.toLowerCase().includes(textoDoFiltro)
        )

        console.log("Posts filtrados:", postsFiltrados)
    }

    return (
        <> 
            <Header/>

            <form onSubmit={enviarFormulario}>
                <input 
                    type="text" 
                    placeholder='Filtrar posts por título'
                    onChange={filtrarTexto} 
                />
                <button>Filtrar</button>
            </form>

            <main>
                <h3>{hello}</h3>
                <p>Estamos aprendendo React criando um blog de receitas.</p>

                <h2>Receitas:</h2>
                
                {posts.map((post) => (
                    <Post
                    key={post.id}
                        id={post.id}
                        titulo={post.titulo}
                        imagem={post.imagem}
                        ingredientes={post.ingredientes}
                        instrucoes={post.instrucoes}
                        autor={post.autor}
                        criadoEm={post.criadoEm}
                        descricao={post.descricao}
                    />
                ))}
            </main>

            <Footer/>
        </>
    )
}