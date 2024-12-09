//ex1_easy
let ex1 = [1, 2, 3 ];
console.log(ex1)

//ex2_easy
let ex2 = [1, 2, 3, 4,];
console.log(`${ex2[0]}`);

//ex3_easy
let ex3 = [1, 2, 3];
ex3[0] = 100;
console.log(ex3);

//ex4_easy
let ex4 = [1, 2, 3, 4, 5];
console.log(ex4.length)

//ex5_easy
let ex5 = [1, 2, 3, 4, 5];
console.log(`${ex5[0] + ex5[1] + ex5[2] + ex5[3] + ex5[4]}`);

//ex6_easy
let ex6 = [1, 2, 3, 4, 5];
ex6.pop(4);
console.log(ex6)

//ex7_easy
let ex7 = [1, 2, 3, 4, 5];
ex7.unshift(5)
console.log(ex7)

//ex8_easy
let ex8 = [1, 2, 3, 4, 5];
let ex9 = [6, 7, 8, 9, 10];
let ex10 = ex8.concat(ex9);
console.log(ex10);

//ex1_medium
let ex1m = [1, 2, 3, 4, 5];
for (let i = 0; i < ex1m.length; i++) {
    console.log(ex1m[i]);
}

//ex2_medium
const livros = [
    { nome: "1984", autor: "George Orwell" },
    { nome: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" },
    { nome: "Dom Casmurro", autor: "Machado de Assis" },
    { nome: "A Revolução dos Bichos", autor: "George Orwell" },
    { nome: "Fahrenheit 451", autor: "Ray Bradbury" }
];

for (let i = 0; i < livros.length; i++) {
    console.log(livros[i].nome);
}

//ex3_medium
let ex3m = [1, 2, 3, 4, 5];
let resultado = ex3m.map(x => x * 2);
console.log(resultado);  

//ex4_medium
const numeros1 = [4, 11, 7, 15, 22, 3, 9];
const maioresQueDez = numeros1.filter(numero => numero > 10);
console.log("Números maiores que 10:", maioresQueDez);


//ex5_medium
const numeros2 = [2, 4, 6, 8, 10];
const todosSaoPares = numeros2.every(numero => numero % 2 === 0);
console.log("Todos os números são pares?", todosSaoPares);


//ex6_medium
const numeros3 = [5, 3, -1, 8, -7, 4];
const primeiroNegativo = numeros3.find(numero => numero < 0);
console.log("Primeiro número negativo:", primeiroNegativo);

//ex7_medium
const numeros4 = [5, 1, 9, 3, 7];
numeros4.sort((a, b) => a - b);
console.log("Array ordenado em ordem crescente:", numeros4);

//ex8_medium
const frutas = ["maçã", "banana", "laranja", "uva"];
frutas.splice(2, 0, "abacaxi"); 
console.log("Array após adicionar elemento:", frutas);


//ex1_hard
function interseccao(array1, array2) {
    return array1.filter(elemento => array2.includes(elemento));
}
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log("Interseção:", interseccao(array1, array2));

//ex2_hard
function mediaAritmetica(numeros) {
    const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
    return soma / numeros.length;
}
const numeros = [10, 20, 30, 40, 50];
console.log("Média aritmética:", mediaAritmetica(numeros));

//ex3_hard
function inverterArray(array) {
    const invertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
        invertido.push(array[i]);
    }
    return invertido;
}
const array3 = [1, 2, 3, 4, 5];
console.log("Array invertido:", inverterArray(array3));

//ex4_hard
function removerDuplicados(array) {
    return array.filter((elemento, indice) => array.indexOf(elemento) === indice);
}
const array4 = [1, 2, 2, 3, 4, 4];
console.log("Sem duplicados:", removerDuplicados(array4));




