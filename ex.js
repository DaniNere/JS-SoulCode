//Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. A equação para realizar a conversão é: C = (F - 32) / 1.8

let fahrenheit = 98.6;
let celsius = (fahrenheit - 32)/1.8

console.log(celsius.toFixed(2));


//Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.


nota1 = 5;
nota2 = 8.6;
nota3 = 6.4;
nota4 = 9;
nota5 = 10;

peso1 = 3
peso2 = 2
peso3 = 1
peso4 = 4
peso5 = 5

numerador = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4) + (nota5 * peso5);

denominador = peso1 + peso2 + peso3 + peso4 + peso5;

let mediaDasNotas = numerador / denominador;

console.log(mediaDasNotas.toFixed(2))