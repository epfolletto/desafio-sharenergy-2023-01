# `Projeto`
Teste técnico SHARENERGY

# `Vídeo explicativo`
[https://youtu.be/QZOpOgpzwOk](https://youtu.be/QZOpOgpzwOk). </br>


# `Instalando e rodando localmente`
1. Fazer o clone do projeto.</br>
2. Dento da pasta *backend* rodar npm install.</br>
3. Dento da pasta *backend* rodar npm run dev o servidor ficará escutando na porta 3003.</br>
4. Dento da pasta *frontend* rodar npm install.</br>
5. Dento da pasta *frontend* rodar npm run start e a página abrirá na porta 3000.

# `Descrição`
Este projeto foi desenvolvido como parte do processo de seleção da empresa Sharenergy. Foram desenvolvidos tanto o *fronted* quanto *backend*. A API possui 13 (treze) endpoints e sua documentação pode ser acessada no link abaixo: </br>

[https://documenter.getpostman.com/view/21552787/2s8Z76uTyh](https://documenter.getpostman.com/view/21552787/2s8Z76uTyh). </br>

Para navegar pela aplicação é necessário realizar um cadastro. Existem dois tipos de usuários: NORMAL e ADMIN, que possuem acessos a diferentes opções, como mostra o esquema abaixo:


|        | Pessoas            | Gatos              | Cachorros          | Meu Perfil         | Usuários | Clientes|
|--------|--------------------|--------------------|--------------------|--------------------|----------|---------|
| NORMAL | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x:      | :x:
| ADMIN  | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:  

# `Páginas da aplicação`
A aplicação é composta, no total, por nove páginas diferentes: apresentação, sobre, login, pessoas, gatos, cachorros, meu perfil, usuários e clientes:

**Página Apresentação:** página inicial para a qual o usuário é direcionado inicialmente, composta por um texto de boas vindas.

**Página Sobre:** composta por um pequeno resumo sobre o projeto.

**Página Login:** página onde o usuário insere seus dados para fazer login. É possível salvar seus dados para manter-se logado selecionando "Lembrar-me".

**Página Pessoas:** nesta página existem alguns componentes:
- cabeçalho: onde o usuário pode navegar entre as páginas da aplicação e também uma opção de logout. </br>
- filtro: na parte esquerda central existem algumas opções de filtro e ordenação das pessoas que aparecem na parte principal da página. </br>
- lista de pessoas: na parte central são exibidos cards das pessoas, onde estão contidas (além da foto) as informações de: username, nome, idade e e-mail. </br>
- rodapé: exibido na parte inferior, contém algumas informações da Sharenergy e também ícones que direcionam para as redes sociais da empresa.

**Página Gatos:** nesta página, o usuário pode escolher um status http e então lhe é retornado uma imagem correspondente ao status selecionado.

**Página Cachorros:** nesta página, o usuário pode iteragir com o botão "Atualizar", então é mostrada uma nova imagem (ou vídeo) de um cachorro.

**Página Meu Perfil:** nesta página o usuário pode completar o seu cadastro e editar seus dados.

**Página Usuários:** disponível apenas para usuários do tipo ADMIN. Nesta página é possível ver todos os usuários que estão cadastrados no sistema, detalhar as informações, editar o tipo e deletar.

**Página Clientes:** disponível apenas para usuários do tipo ADMIN. Nesta página é possível manipular informações de clientes: criar, detalhar, editar e deletar.

# `Testes`
Foram feitos testes unitários utilizando Jest:
<img width="2000px" src="./frontend/src/assets/images/test.png"/>

# `Tecnologias utilizadas`
<div>
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
</div>

# `Autor`
Evandro Paulo Folletto </br>
<a href="https://www.linkedin.com/in/evandrofolletto/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> 
<a href="https://github.com/epfolletto"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a> 

# `Paleta de cores utilizada`
<img width="450px" src="./frontend/src/assets/images/color-theme.png"/>

# `Imagens`

### Página Start
<img src="./frontend/src/assets/images/readme/1.start.png"/>

### Página About
<img src="./frontend/src/assets/images/readme/2.about.png"/>

### Página Pessoas
<img src="./frontend/src/assets/images/readme/3.peoples.png"/>

### Página Gatos
<img src="./frontend/src/assets/images/readme/4.gatos.png"/>

### Página Cachorros
<img src="./frontend/src/assets/images/readme/5.cachorros.png"/>

### Página Meu Perfil
<img src="./frontend/src/assets/images/readme/6.meuperfil.png"/>

### Página Usuários
<img src="./frontend/src/assets/images/readme/7.usuarios_1.png"/>

### Página Cliente
<img src="./frontend/src/assets/images/readme/8.usuario_2.png"/>

### Página Cliente
<img src="./frontend/src/assets/images/readme/9.clientes_1.png"/>

### Página Cliente
<img src="./frontend/src/assets/images/readme/10.clientes_2.png"/>

### Página Cliente
<img src="./frontend/src/assets/images/readme/11.clientes_3.png"/>

### Página Detail
<img src="./frontend/src/assets/images/readme/12.clientes_4.png"/>