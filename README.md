<p align="center"><img width="100px" src="/src/img/icon_arroxa.png" alt="logo arroxa"></p>

# Kit Arroxa com Gulp
[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](http://arroxa.mit-license.org/)
[![Build Status](https://travis-ci.org/arroxa/gulp.svg?branch=master)](https://travis-ci.org/arroxa/gulp)
> O [Gulp](http://gulpjs.com/) é uma aplicação javascript que tem como objetivo facilitar sua vida automatizando suas tarefas.
Tarefas como: minificar, concatenar, upload de arquivos e entre tantas outras.

> Em nossas dependências também está incluso o [Bower](http://bower.io/) que é um dos gerenciadores de dependência para front mais utilizado entres os devs.

### Tarefas
- HTML
  - PUG `antigo jade`
  - Minifica

- CSS
	- SASS `.sass`
	- Autoprefixer
	- Valida
	- Minifica

- Javascript
	- Valida
	- Mififica

- Imagens
	- Minifica

- Geral
	- BrowserSync/ConnectSync


### Estrutura
##### Desenvolvimento
- src/
	- css/
		- main.sass
	- js/
		- main.js
	- img/
	- libs/`dependências do bower`
	- index.pug

##### Produção
- www/
	- css/
      - libs.min.css
      - main.min.css
	- js/
      - libs.min.js
      - main.min.js
	- img/
	- index.html



### Como usar
- Abra seu terminal/cmd
- Clone o repositório `$ git clone https://github.com/arroxa/gulp.git`
- Acesse a pasta clonada `$ cd gulp`
- Instale as dependências `$ npm install`
- Execute o gulp `$ gulp`
- Pronto! Se tudo ocorrer direitinho seu navegador irá abrir com uma página demo, e depois é só arroxar! ;)


### Contribuir
Ajude-nos a melhorar nossa aplicação. Abra uma [issue](https://github.com/arroxa/gulp/issues/new) ou  envie um `pull request`.
- [Fork nosso repositório!](https://github.com/arroxa/gulp#fork-destination-box)
- Crie sua "feature branch": `git checkout -b minha-nova-feature`
- Comente suas alterações: `git commit -m 'Comentando minha feature'`
- Suba sua branch: `git push origin minha-nova-feature`
- Nos envie seu pull request =D


### Licença
[MIT License](http://arroxa.mit-license.org/) © Arroxa
