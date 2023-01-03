<a name="readme-top" id="readme-top"></a>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<br />
<div align="center">

<img src="images/cashforce.png" alt="Logo">
<h3 align="center">Teste Técnico</h3>

  <p align="center">
    Este é meu teste técnico para a vaga de desenvolvedor Fullstack Node/Vue.js
    <br />
  </p>
</div>



<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#desenvolvido-com">Desenvolvido com</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-a-aplicação">Iniciando a aplicação</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
        <li><a href="#desinstalação">Desinstalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#rodando-os-testes">Rodando os testes</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



## Sobre o projeto

![Página inicial][preview-1]

O projeto consiste em uma aplicação para gerenciamento de pedidos, nela é possível visualização um resumo das notas fiscais do cliente como número do documento fiscal, data de emissão, valor, estado do pedido, etc.

A aplicação foi desenvolvida a partir tendo como referência visual o Design e o código sql para criação do banco de dados foram fornecidos pela Cashforce.

Além da página principal requisitada pelo teste também foi desenvolvido uma rota para exibir os detalhes do fornecedor.

O frontend da aplicação foi testado com o __Cypress__ utilizando a proposta end-to-end.


<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>



### Desenvolvido com

A escolha das tecnologias do projeto se baseou nos requisitos e diferenciais destacados na vaga, por isso __Vue.js__, __Sequelize__ com MySQL, __Node.js__ e __Bootstrap__ foram utilizados. Como diferencial optei por utilizar containers com o __Docker__.

* [![Vue][Vue.js]][Vue-url]
* [![Docker][Docker]][Docker-url]
* [![Node.Js][Node.js]][Node-url]
* [![Cypress][Cypress]][Cypress-url]
* [![Sequelize][Sequelize]][Sequelize-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>



## Iniciando a aplicação

### Pré requisitos

Para rodar esta aplicação é necessário ter instalado o __npm__ e o ___Docker 17.09.0+___ .
* Docker
    https://docs.docker.com/get-docker/

### Instalação

1. Clone o repositório
    ```sh
    git clone https://github.com/brunofpessoa/Cashforce.git
    ```

2. Execute a aplicação
No diretório ___/app___ execute:
    ```sh
    npm run compose:up
    ```
    ou
    ```sh
    npm run compose:dev:up # Versão de desenvolvimento
    ```

Pronto, por padrão o servidor estará rodando em __localhost:3000__ e o frontend em __localhost:5173__.

Caso queira, você pode mudar as variáveis de ambiente criando um arquivo __.env__ conforme o __.env.exemple__ em cada diretório.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>


### Desinstalação

1. Removendo os containers
  No diretório ___/app___ execute:
    ```sh
    npm run compose:down
    ```
   ou
   ```sh
    npm run compose:dev:down # Versão de desenvolvimento
   ```
2. Excluindo as imagens
    ```sh
    docker rmi app-frontend app-node mysql:8.0.23
    ```

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>


## Uso

A aplicação é bem intuitiva, basta acessar e visualizar as informações. Duas páginas podem ser vistas, uma com o resumo dos pedidos e outra com os detalhes do fornecedor.

![Página inicial][preview-1]

![Página inicial][preview-2]


<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>


## Rodando os testes

### Frontend
No diretório __/frontend__, com a aplicação em execução, rode em seu terminal:

```sh
npm run cypress
```

Deverá aparecer em seu terminal o seguinte resultado.

![test-preview][test-preview]

Caso prefira visualizar o resultado no browser execute:
```sh
npm run cypress:open
```

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>


## Contato

Bruno Pessoa - brunofernpessoa@gmail.com

LinkedIn - https://www.linkedin.com/in/brunofpessoa/

Github - https://github.com/brunofpessoa/

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>





[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/brunofpessoa/Cashforce/blob/master/LICENSE


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/brunofpessoa


[preview-1]: images/preview-1.png
[preview-2]: images/preview-2.png

[test-preview]: images/test-preview.png


[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Node.Js]: https://img.shields.io/badge/Node.js-35495E?style=for-the-badge&logo=nodedotjs&logoColor=489341
[Node-url]: https://nodejs.org 
[Sequelize]: https://img.shields.io/badge/Sequelize-35495E?style=for-the-badge&logo=sequelize&logoColor
[Sequelize-url]: https://sequelize.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Docker]: https://img.shields.io/badge/Docker-35495E?style=for-the-badge&logo=docker&logoColor
[Docker-url]: https://www.docker.com/
[Cypress]: https://img.shields.io/badge/Cypress-35495E?style=for-the-badge&logo=cypress&logoColor
[Cypress-url]: https://www.cypress.io/