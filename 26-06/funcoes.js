// 1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.

function imc (peso, altura){
 console.log(peso/(altura*altura));
}

function indicarStatusIMC(imc) {
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
}

// 2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%

function porcentagem (numero){
    return numero*100
}

// 3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true

function negativo (numero){
return numero < 0;
}
console.log(ehNegativo(-2)); // Saída: true

// 4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

function contar (numero) {

    for(let i =1; i <= numero; i++){
        console.log(i)
    }
}

// 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.
function nomeCompleto (nome, sobrenome){
return (`Meu nome compleo é ${nome} ${sobrenome}`);
}
// 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.
function areaCirculo (R){
const PI = 3.14;
return PI * R * R;
}

console.log(areaCirculo(5));

// 7. Crie uma função que recebe a área de um circulo e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function nivelArea (area){
if (area >= 1 && area <= 20){
console.log("Nível I");
}else if (area > 20 && area <= 40){
    console.log("Nível II");
    } else {
        console.log("Nivel Inválido");
    }
}
nivelArea(25);

// 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.
function uperCase (palavra){
return palavra.toLowerCase();
    
}
// 9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

function busca(string, caractere){
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === caractere) {
            count++;
        }
    }
    return count;

}
console.log(contarOcorrencias("banana", "a"));