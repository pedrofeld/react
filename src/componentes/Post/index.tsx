export function Post() {
    return (
        <article>
            <div className="nome-e-foto-da-receita">
                <h3>Bolo de chocolate</h3>
                <img src="https://picsum.photos/200/200" alt="Imagem aleatória"/>
            </div>
            
            <div className="ingredientes">
                <p>Ingredientes:</p>
                <ul>
                    <li>2 xícaras de farinha de trigo</li>
                    <li>1 xícara de açúcar</li>
                    <li>1/2 xícara de cacau em pó</li>
                    <li>1 colher de chá de fermento em pó</li>
                    <li>1/2 colher de chá de sal</li>
                    <li>1 xícara de leite</li>
                    <li>1/2 xícara de óleo vegetal</li>
                    <li>2 ovos</li>
                    <li>1 colher de chá de extrato de baunilha</li>
                </ul>
            </div>


            <div className="instrucoes">
                <p>Instruções:</p>
                <p>
                    1. Pré-aqueça o forno a 180°C.<br/>
                    2. Misture os ingredientes secos.<br/>
                    3. Adicione os ingredientes líquidos e mexa bem.<br/>
                    4. Despeje a massa em uma forma untada.<br/>
                    5. Asse por 35-40 minutos ou até que um palito saia limpo.<br/>
                    6. Deixe esfriar antes de desenformar e decorar a gosto.
                </p>
            </div>
            

            <div className="autor-info">
                <h3>Autor:</h3>
                <img src="https://github.com/pedrofeld.png" alt="Foto de perfil do autor"/>
                <div>
                    <span>Pedro Feld</span>
                    <span>08/11/2025</span>
                </div>
                <p>Delicioso bolo de chocolate</p>
            </div>
        </article>
    )
}

