![GitHub repo size](https://img.shields.io/github/repo-size/FabianoSouzaPereira/pocvirtualstore)
![GitHub language count](https://img.shields.io/github/languages/count/FabianoSouzaPereira/pocvirtualstore)
![GitHub top language](https://img.shields.io/github/languages/top/FabianoSouzaPereira/pocvirtualstore)</br>

# Pocvirtualstore

É uma aplicação web que foi baseada em Angular e tem a intenção demonstrar domínio desta
técnologia; bem como as diversas outras que foram utilizadas nesse desenvolvimento.
O objetivo alcançado foi uma aplicação web (e-commerce) para venda de produtos com banco de dados mySQL (isolado em container docker).Como recursos para esse projeto foram utilizado o bem conhecido Docker bem como webpack, bootstrap jquery, angular-imask, currency-formatter, toastr, primeng, primeicons.

# Detalhes das técnologias abordadas

### Docker + Mysql

O Docker dispensa apresentações é um gerenciador de Containers que encapsulou o mysql da aplicação dentro de um container. Desta forma ficamos com o SGBD isolado do resto do sistema para evitar futuras problemas com os dados armazenados.

![docker_mysql](https://user-images.githubusercontent.com/20540689/96800582-102c3e80-13dc-11eb-96d2-b36b0a68b761.jpeg)

### WebPack

O webpack que vem agregado no angular usa um grafo de dependências para decidir quais módulos precisam ser empacotados. Isso significa que o webpack inicia de um único módulo e processa todas as dependências direta e indiretamente para construir o grafo de dependências inteiro e então carregar todos os módulos necessários.
Ele usa o Loaders para carregar vários tipos de arquivos e os transforma em módulos válidos que o webpack pode entender.

![webpack](https://user-images.githubusercontent.com/20540689/96799120-cc840580-13d8-11eb-9f6c-0f2664531a02.png)

### bootstrap jquery

O design responsivo da web trata da criação de sites que se ajustam automaticamente para ter uma boa aparência em todos os dispositivos, desde telefones pequenos a grandes desktops.

### Angular-imask

Usado recursos do imask para criar mascaras formatação de entrada de dados.

### Currency-formatter

CurrencyFormatter.js permite formatar números como moedas. Ele contém 155 definições de moeda e 715 definições de localidade prontas para uso. Ele lida com moedas formatadas de forma incomum, como o INR. Esta biblioteca agora é usada por fundos de hedge, bancos e uma variedade de outras organizações em todo o mundo para a formatação eficiente de moedas em uma ampla gama de aplicações.

### Toastr

A biblioteca JavaScript Toastr nos permite exibir notificações para o usuário em aplicações web utilizando uma estrutura bastante simples, porém com um resultado eficiente e elegante.

### Primeng

PrimeNG é uma coleção de ricos componentes de IU para Angular. Todos os widgets são de código aberto e gratuitos para uso sob a Licença MIT. PrimeNG é desenvolvido pela PrimeTek Informatics, um fornecedor com anos de experiência no desenvolvimento de soluções de UI de código aberto.

### Primeicons

Fontes de ícone são fontes que contêm símbolos e glifos em vez de letras ou números. Eles são populares para web designers, pois você pode estilizá-los com CSS da mesma forma que um texto normal. Além disso, como são vetores, são facilmente escaláveis.
