# Resumo

## React

React é uma biblioteca JavaScript desenvolvida pelo Facebook para construir interfaces de usuário. É baseada em componentes, permitindo que desenvolvedores criem aplicações web interativas e reutilizáveis de forma eficiente. O React utiliza um conceito chamado "Virtual DOM" para otimizar a atualização da interface, tornando as aplicações mais rápidas e reativas.

## Vite

Vite é uma ferramenta de construção moderna para aplicações web que oferece um ambiente de desenvolvimento rápido e otimizado. Ele utiliza módulos ES nativos para fornecer um tempo de inicialização quase instantâneo e recarregamento rápido durante o desenvolvimento. Vite também suporta funcionalidades como pré-processamento de arquivos e otimização de pacotes para produção, oferecendo uma experiência de desenvolvimento fluida e eficiente.

## Uso em Desenvolvimento Front-End

Tanto o **React** quanto o **Vite** são usados para desenvolvimento front-end:

- **React**: Focado na construção de componentes de interface, permitindo a criação de aplicações interativas e responsivas.
- **Vite**: Atua como uma ferramenta que melhora o fluxo de trabalho no desenvolvimento de aplicações web, incluindo aquelas feitas com React.

Em resumo, React é utilizado para criar interfaces, enquanto Vite facilita o processo de desenvolvimento dessas aplicações front-end.

## Passo a Passo para Criar um Projeto React com Vite

### No CMD:
1. **Entrar na pasta desejada para armazenar o projeto React.**
   
     ```bash
     cd caminho\para\a\pasta
    ```

2. **Rodar o comando**:

   ```bash
   npm create vite@latest
   ```

3. **Dar um nome ao projeto.**

4. **Selecionar recursos:**
- Escolher o template React e depois TypeScript.

3. **Entrar no projeto pelo VSCODE:**
    
    ```bash
     code .
    ```

4. **Ajustar arquivo vite.config.ts:**

    ```bash
    export default defineConfig({
        plugins: [react()],
        server: {
            open: true,
        },
    })
    ```

5. **No terminal bash do VSCODE:**

    ```bash
    npm run dev
    ```

## Diferença entre TSX e JSX

### JSX
- **Uso**: Sintaxe de extensão do JavaScript para React.
- **Tipo**: Arquivo JavaScript.
- **Exemplo**: 

  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

### TSX
- **Uso**: Versão do JSX para TypeScript, com suporte a tipos estáticos.
- **Tipo**: Arquivo TypeScript que inclui JSX.
- **Exemplo**:

    ```tsx
    const element: JSX.Element = <h1>Hello, world!</h1>;
    ```
### Resumo
- ***JSX**: Usado com JavaScript, sem verificação de tipos.
- ***TSX**: Usado com TypeScript, com suporte a tipos estáticos.