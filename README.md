# WhatsApp random number API

Se você precisa receber mensagens no WhatsApp a partir de uma URL (o famoso link api.whatsapp.com/send phone=code+number) porém possui mais de um número (ou vendedor) que precisa receber aleatóriamente criando uma fila de distribuição.


## Propósito

O objetivo geral dessa API é criar uma URL capaz de identificar a solicitação via http e responder com um número disponível (ou registrado) de forma aleatória, fazendo uma distribuição entre todos os números cadastrados na base.


## Aplicabilidade

Entenda a seguinte situação: você possui três vendedores, cada um com seu número do WhatsApp Web, e precisa criar um botão na home do site da empresa para levar ao WhatsApp (uma forma de gerar contatos mais rápido). O problema é que você não pode deixar apenas o número de um vendedor no botão, precisa de um gerenciamento da fila para distribuir igualitariamente os contatos que solicitam.
A partir disso surge a solução, um link dinâmico que identifica o último vendedor selecionado e redireciona automaticamente para o número do próximo.


## Recursos

Aplicação desenvolvida em Node.js com Express, além de deploy no Heroku.

* Teste a API no [Heroku aqui](https://whatsapp-random.herokuapp.com/) (listagem dos usuários cadastrados no JSON);
* Teste a URL geral que gera o redirecionamento para o WhatsApp Web [aqui](https://exclusivo.compufour.net.br/whatsapp-redirect)


## Potenciais melhorias

* Gravar registros de logs e usuários em um banco de dados, substituindo o JSON;
* Criar uma interface para gerenciar os links disponíveis e usuários ativos;
* Enviar na mesma requisição um registro via API do CRM utilizado pela equipe de vendas.
