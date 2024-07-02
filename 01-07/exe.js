// 1. Crie uma função arrow que recebe dois números e retorna o maior deles.

const comparar = (num1, num2) => (num1 > num2 ? num1: num2);

// 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.

const primeiraLetra = (palavras) => {

    palavras.forEach(palavra => {
        let inicioMaiuscula = palavra.charAt(0).toUpperCase() + palavra.slice(1);
        console.log(inicioMaiuscula)
    });

}
const palavras = ["gato", "cachorro", "elefante"];
primeiraLetra(palavras);

// 3. Use map para transformar um array de números, multiplicando cada número por 5.

const multiplicar = (num) => num.map((n) => n*5)
const numeros = [2, 36, 6, 8, 99];
const numerosMultiplicados = multiplicar(numeros);
console.log(numerosMultiplicados);

// 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.

const idades =[15,16,18,21,25,26,32];
const maiorDeidade = idades.filter((idade) => idade >= 18);
console.log(maiorDeidade)



// 5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.
const livro = {
título: "Amor além da vida",
autor: "Nobody",
publicacao: {
    editora: "Seilá",
    ano: 2021,
}
}
const editora = livro.publicacao.editora;
console.log(editora)

// 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.
const frutas = ["maçã", "banana", "laranja", "uva", "morango", "abacaxi", "manga", "pera"];
const [primeira, segunda] = frutas;

console.log(primeira, segunda);

// 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.

// Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

const pares = (numeros) => numeros.filter((num) => num % 2 ===0);
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = pares(numeros);
console.log(numerosPares);

// Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.

const soma = (numeros) => numeros.reduce((total, num) => total + num, 0);
const numeros = [1, 2, 3, 4, 5];
const resultadoSoma = soma(numeros);
console.log(resultadoSoma);

// Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.

const palindromo = (str) => {
    const stringInvertida = str.split("").reverse().join("");
return str === stringInvertida;
};

console.log(palindromo("ARARA"));

// Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.

const encontrarVogais = (palavra) => {
let vogais =["a","e","i","o","u"]

const vogaisEncontradas = palavra.split("").filter(letra => vogais.includes(letra));

return vogaisEncontradas

};
const procurar = "elefante";
console.log(encontrarVogais(procurar));

// Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.

const menorNumero = (num) =>{
    let comparador = num[0];
    const menor = num.reduce((menor, num) => {
        return num < menor ? num : menor
    }, comparador);
    return menor;
};
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(menorNumero(numeros));