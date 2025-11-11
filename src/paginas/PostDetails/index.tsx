import { use } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { posts } from "../../posts"

export function PostDetails() {
    const { id } = useParams()
       
    const post = posts.find((post) => post.id === Number(id))

    if (!post) {
        return <p>Post não encontrado.</p>
    }

    const navegar = useNavigate()

    /* 
        function voltar() {
            window.history.back()
        }
    */

    /*
        function voltar() {
            navegar(-1)
        }
    */

    function voltar() {
        navegar('/')
    }

    return (
        <>
            <h1>{post.titulo}</h1>
            <img src={post.imagem} alt={post.titulo} />
            <p><strong>Descrição:</strong> {post.descricao}</p>
            <div>
                <img src="https://github.com/pedrofeld.png" alt="Foto de perfil do autor" />
                <p><strong>Data de criação:</strong> {post.criadoEm}</p>
            </div>

            <button onClick={voltar}>Voltar</button>
        </>
    )
}