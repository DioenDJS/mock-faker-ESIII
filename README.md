<h1 align="center" >
        <img src="https://camo.githubusercontent.com/109674e1ecf82404f6959bbac1d06f30b2fd800f2da4e2de5b9f22459cafebf8/687474703a2f2f696d6775722e636f6d2f4b69696e512e706e67" alt="img nodejs" height="60" width="60"style="border-radius:5px"/>   Mock com Faker
</h1>

## Tecnologias Utilizadas no projeto :construction:

- [Node.js](https://nodejs.org/en/) <img align="center" alt="img nodejs" height="20" width="25" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" style="max-width:100%;" />
- [Faker.js](https://github.com/marak/Faker.js/) <img align="center" alt="img nodejs" height="20" width="35" src="https://raw.githubusercontent.com/Marak/faker.js/master/logo.png" style="max-width:100%;" />
- [Nodemon.js](https://www.npmjs.com/package/nodemon) <img align="center" alt="img nodejs" height="20" width="20" src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" style="max-width:100%;" />

## Cenário :computer:
Tratar o conteúdo de um array com 100 registros através de ``map, filter, reduce e find`` funções.

Campos dos objetos objetos que irão compor o array: ```name, birthday, genre, lastPurchaseDate, countPurchase```

## Desafios :gear:
0. Mockar a criação dos objetos respeitando os seguintes requisitos:
Os dados devem estar em ``pt_BR``;
Os dados devem ser coerentes com os seus campos. Ex: é impossível que algum cliente tenha nascido em ``2022``;
As datas de nascimento devem ser entre ``1910 a 2019``.
Os nomes devem ser nomes completos.

> 1. Desenvolva, utilizando filter , uma função que, dado um caractere de entrada, retorne todos os registros de clientes cujo o nome inicia com o caractere.

> 2. Retorne o array de clientes

> 3. Desenvolva uma função que, dado o caractere de entrada, retorna apenas um número com o total de registros >encontrados.

> 4. Desenvolva uma função que retorne apenas os nomes dos clientes.

> 5. Desenvolva uma função que retorne apenas o primeiro nome dos clientes.

> 6. Desenvolva uma função que retorne apenas o primeiro nome dos clientes cujo os nomes começam com o caractere de entrada da função.

> 7. Desenvolva uma função que retorne todos os usuários que são maiores de idade.

> 8. Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista.

> 9. Implemente uma função que retorna o total de vendas realizadas somando as compras de todos os clientes.

> 10. Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.

> 11. Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.

## Como executar :gear:

- Clone o repositório
- Rode o `npm run dev` para iniciar a aplicação.

## Dependências do Projetos :card_index_dividers:
> - nodemon
>
>```npm install nodemon -D ```

> - faker.js
> 
>```npm install faker -D```
