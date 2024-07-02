// Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

function comparar (numeros){
let numerosPares = [];
    for (let i= 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            numerosPares.push(numeros[i]);
        }
        return numerosPares;
    }
}

console.log(comparar([1,2,3,4,5,6,7,8,9,10]));

// Aqui usei um array vazio para armazenar os numeros pares de acordo com a verificação feita dentro do if, onde ele verifica se o resto do indice [i] é zero, ou seja divissivel por 2, no caso um numero parent, caso seja verdadeiro ele da um push no array vario numerosPares com o indice testado. 

// Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.

function soma(numeros){
 let total = 0;
    for(let i of numeros){
        total += i;
    }
    return total;
}
let somar =[2,2,2,2,2,2,2,2,2,2,2];
console.log(soma(somar));
// Aqui usei um for of para percorrer o array e a cada iteração ele adiciona [i] dentro de total, fazendo assim a soma dos indices. 


// Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.

const palindromo = (str) =>{
let stringInvertida = str.split("").reverse().join("");

return str == stringInvertida;

} 

// Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.

function procurar (palavra){
let vogais = ["a","e","i","o","u"]
let vogaisEncontradas = [];

for (let i =0; i < palavra.length; i++){
if(vogais.includes(palavra[i])){
    vogaisEncontradas.push(palavra[i]);
}
}
return vogaisEncontradas;

}
let palavra = "elefante";
//Aqui eu criei dentro da função o array para usar como comparador contendo as vogais, criei um array vazio para adicionar as vogais encontradas nas palavras que serão parâmetro na função. No If eu usei o includes para verificar se na palavra de parâmetro tem as vogais que estão dentro do array de vogais, caso a condição seja verdaira ele adiciona no array de vogaisEncontradas a vogais do indice[i].


// Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.
function encontrarMenorNumero (numeros){
let menorNumero = numeros[0];


for (let i =0; i = numeros.length; i++){
    if (numeros[i] < menorNumero){
     menorNumero = numeros[i];
    }
    }
return menorNumero;
}

let arrayDeNumeros = [34, 15, 88, 2, 49, 23];

//Aqui dentro da função criei uma variável com o valor de indice 0 do array para usar como comparador, com isso dentro do for percorrendo o array dado como parâmetro na função eu comparo sem o valor de menorNumero é menor que o valor de numero[i], sendo verdadeira ele adiciona o valor a variável menorNumero. Retornando o menorNumero em return

// Exercício 6: Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3
function media (numeros) {
             
        let soma = numeros.reduce((total, numero) => total + numero, 0);
        let media = soma/numeros.length;
        return media;
}
let arrayDeNumeros = [7.0, 8.0, 9.0];

//Aqui na função media, criei a variável soma que vai somar todos os elementos do array, usei uma arrow function para isso onde eu vou adicionar dentro de total o valor a cada vez que ele iterar com um indice. Dentro de media eu uso o valor atribuído a soma e divido pela quantidade de numeros usando o tamanho do array, retornando assim a média.

// Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.

function caracteres (string){
 let contador = {};
 for (let i=0; i< string.length; i++){
    let caractere = string[i];
    if (contador[caractere]) {
        contador[caractere]++;
    } else {
        contador[caractere] = 1;
        }
}
    return contador
 }

let minhaString = "abracadabra";
//Aqui na função caracteres criei um objeto vario chamado contador, onde vou adicionar a quantidade de vzs que um caractere aparece na string informada como parâmetro na função, eu criei uma variável caracter com o valor inicial de string[i], ou seja o primeiro caracter da string, no if eu verifico que se contador tem o caractere da posição [i], se existir, incrementa a contagem desse caractere. caso não tenha ele inicializa a contagem com desse caratere com 1. Retorna o objeto contador com as contagens de cada caractere.

// Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.

const extrairDigitalVerificadores (cpf) => cpf.split("-");