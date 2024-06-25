// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
let num = 2;
while (num <= 10) {
    console.log(num);
    num += 2;
}
// 2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// ...
// 7 x 10 = 70

let multiplicador = 1;
let numero = 7;
while (multiplicador <= 10) {
    console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
    multiplicador++;
}

// 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.

let soma = 0;
let i = 1;
while (i < 1000) {
    if (i % 2 !== 0) {
        soma += i;
    }
    i++;
}
console.log(`Soma dos números ímpares de 1 até 999: ${soma}`);

// 4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.

let num = 1;
let contador = 0;
while (num <= 1000) {
    if (num % 9 === 0) {
        console.log(num);
        contador++;
    }
    num++;
}
console.log(`Total de números divisíveis por 9 entre 1 e 1000:${contador}`);