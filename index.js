const faker = require('faker');

const datas = []; //criando o array que ira armazenar os objetos

function populateData(amount){
    for(let index = 0; index < amount; index++){
        faker.locale = 'pt_BR';
        const obj = {
            name: faker.name.findName(),
            birthday: faker.date.between(1910, 2019),
            gender: faker.name.gender(),
            lastPurchaseDate: faker.date.recent(1000), 
            countPurchase: faker.datatype.number(50)
        }
        datas.push(obj)
    }
}

populateData(13);

console.log("------------------------- Listagem Geral de Clientes ---------------------------------");
console.log(datas);
console.log("---------------------------------------------------------------------------------------");

/** 1. Desenvolva, utilizando filter , uma função que, dado um caractere de 
 * entrada, retorne todos os registros de clientes cujo o nome inicia com o 
 * caractere. */
let searchLetter = "M"
function filterByName(name){
    const nameFilter = datas.filter(value => value.name.startsWith(name[0]));
    return nameFilter;
}

console.log(`1. Resultado da busca do name com caracter " ${searchLetter} " : `, filterByName(searchLetter));
console.log("---------------------------------------------------------------------------------------");

// /** 2. Retorne o array de clientes */
console.log("2. Listando todo array de clientes \n")
datas.forEach((item) =>{
    console.log(`Name: ${item.name} \nBirthday: ${item.birthday.getDate()}/${item.birthday.getMonth() + 1}/${item.birthday.getFullYear()}\ngender: ${item.gender}\nLastPurchaseDate: ${item.lastPurchaseDate.getFullYear()}\nCountPurchase: ${item.countPurchase}\n -------------------------------------`);
})
   
console.log("---------------------------------------------------------------------------------------");
/**3. Desenvolva uma função que, dado o caractere 
 * de entrada, retorna apenas um número com o total de registros encontrados. 
 * */

 function filterByCaracter(name){
    const nameFilter = datas.filter(value => value.name.startsWith(name[0]));
    return nameFilter.length;
}

console.log(`3. Resultado total da busca de registros com o caracter ${searchLetter} : `, filterByCaracter(searchLetter));
console.log("---------------------------------------------------------------------------------------");


/** 4. Desenvolva uma função que retorne apenas os nomes dos clientes. */

const nameDatas = datas.map(value => value.name);
console.log("4. Retornando lista dos nomes completos dos clientes: ",nameDatas);
console.log("---------------------------------------------------------------------------------------");


// 5. Desenvolva uma função que retorne apenas o primeiro nome dos clientes.

const firstNameDatas = datas.map(value => value.name.split(" ")[0]);
console.log("5. Retornando apenas os primeiros nomes dos clientes: ",firstNameDatas);  
console.log("---------------------------------------------------------------------------------------");

/**
   6. Desenvolva uma função que retorne apenas o primeiro nome dos 
   clientes cujo os nomes começam com o caractere de entrada da função.
 */
searchLetter = "C"

function returnNameCaracter(letters){

    // const nameFilter = datas.filter(value => value.name.startsWith(name[0]));
    const nameFilter = datas
        .filter(value => value.name.startsWith(letters))
        .map(value => value.name.split(" ")[0]);

    return nameFilter;    
}
console.log(`6. Retornando apenas o primeiro nome dos clientes encontrados por caracter ${searchLetter}:`, returnNameCaracter(searchLetter));
console.log("---------------------------------------------------------------------------------------");

/** 7. Desenvolva uma função que retorne todos os usuários que são maiores de idade. */
let anoAtual = 2021;
const maioresIdade = datas.filter(value => (anoAtual - value.birthday.getFullYear()) > 18 );
console.log( "7. Usuários Maiores de idade : ", maioresIdade);
console.log("---------------------------------------------------------------------------------------");


// 8. Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista.

let searchName = "Clara"
function searchNameClint(name){
    const nameFilter = datas.find(value => value.name.match(name));

    return nameFilter ? nameFilter : ` " ${searchName} " não encontrado !`;
}

console.log(`8. Resultado da busca por name " ${searchName} " se consta na lista: `, searchNameClint(searchName));
console.log("---------------------------------------------------------------------------------------");

/** 9. Implemente uma função que retorna o total de vendas realizadas somando as compras de todos os clientes.*/

const totalDeCompras = datas.reduce((acc, next) => acc + next.countPurchase, 0);

console.log("9. Total de compras de todos os clientes : ", totalDeCompras);
console.log("---------------------------------------------------------------------------------------");

/** 10. Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.*/

const clientesComprasUmAno = datas.filter(value => (anoAtual - value.lastPurchaseDate.getFullYear()) >= 1 );

console.log( "10. Lista de Clientes que nao compram a mais de um ano : ", clientesComprasUmAno);
console.log("---------------------------------------------------------------------------------------");

/**
11. Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.
*/

const realizaramMaisCompras = datas.filter(value => value.countPurchase > 15)
console.log("11. Clientes que realizaram mais de 15 compras :", realizaramMaisCompras); 
console.log("---------------------------------------------------------------------------------------");
