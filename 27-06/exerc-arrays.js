// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.

function lista (alunos, listaDepresenca){

    let faltantes = []
   
    for (let i = 0; i < alunos.length; i++){
        if(!listaDepresenca.includes(alunos[i])){
            faltantes.push(alunos[i]);        }

    return faltantes;

    }
};

let alunos = ["Maria", "Joao", "Pedro", "Augusto"];
let listaDePresenca = ["Maria", "Joao", "Augusto"];

let faltantes = lista(alunos, listaDePresenca);
console.log(faltantes); 


// 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.


    function elevarArrayAoQuadrado(numeros) {
        let aoQuadrado = [];
        
        for (let n = 0; n < numeros.length; n++) {
            aoQuadrado.push(numeros[n] ** 2);
        }
        
        return aoQuadrado;
    }
    //usando o for of
    // for (let n of numeros){
    //aoQuadrado.push(n**2);}

    // Chamando a função com um array de números
    let resultado = elevarArrayAoQuadrado([34, 11, 5]);
    console.log(resultado);

// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.

function  extensaoArquivo (arquivos, extensao) {

    let encontrados = arquivos.filter(function(arquivo){
        return arquivo.endsWith(extensao);
    });

    return encontrados;
}

let arquivos = [
    "arquivo1.png",
    "arquivo2.png",
    "documento1.pdf",
    "documento2.pdf",
    "imagem1.png",
    "imagem2.png",
    "relatorio1.pdf",
    "relatorio2.pdf",
    "foto1.png",
    "foto2.png"
];

let arquivosPNG = extensaoArquivo(arquivos, ".png");
console.log(arquivosPNG);

// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.

let numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++){
console.log(numeros[i]);
}

for(let i of numeros){
    return i;
}

// 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.

function arrayStrings (palavras){

    let resultado = [];

    for(let i=0; i < arrayStrings.length; i++){
        if(arrayStrings[i].length >5){
            resultado.push(arrayStrings[i]);
        }
    return resultado;
    }

}

let arrayOriginal = ["banana", "maçã", "laranja", "morango", "abacaxi", "pera"];

let stringsGrandes = arrayStrings(arrayOriginal);
console.log(stringsGrandes); 

// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.

let array = [0,5,6,7,15,25]
let referencia = array[0];

for (let item= 0; item < array.length; item++){
if(array[item] > referencia){
    referencia = array[i];
}
}
console.log(`O maior número é ${referencia}`);

// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.

function extrair (cpf){
 
    let digitosLimpos = cpf.split('.').join('').split('-').join('');

    let ultimosDigitos = digitosLimpos.slice(-2)
    return ultimosDigitos;
}

let meuCPF = "056.985.990-23";

let digitosVerificadores = extrair(meuCPF);
console.log(digitosVerificadores);

// 8. Crie uma função que inverte uma string. Retorna ela invertida.

function inverte (string){
    return string.split("").reverse().join("")
}
let palavra = "abcdef";
let palavraInvertida = inverte(palavra);
console.log(palavraInvertida);

// 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.

function multiplicar (palavra, quantidade){

let palavrasRepetidas = ""; 

for (let i=0; i < quantidade; i++){
palavrasRepetidas +=palavra

}
return palavrasRepetidas
}

let resultado = multiplicar("batata", 3);
console.log(resultado);

//usando arrow function
// const multiplicar (palavra, quantidade) =>{
// let palavrasRepetidas = ""; 

// for (let i=0; i < quantidade; i++){
// palavrasRepetidas +=palavra
    
// }
// return palavrasRepetidas };



// 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.

function comparar (string1, string2){
if(string1 === string2){
    return true;
}else{
    return false;
}
}
console.log(compararStrings("abc", "abc")); 

// 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'

function formatarData(date, parametro) {
    let dia = date[0]; // Extrai o dia do array
    let mes = date[1]; // Extrai o mês do array
    let ano = date[2]; // Extrai o ano do array

    // Retorna a data formatada usando o separador especificado
    return `${dia}${parametro}${mes}${parametro}${ano}`;
}

// Exemplo de uso da função
let data1 = [20, 6, 2000];
console.log(formatarData(data1, '.')); // Saída esperada: '20.06.2000'

// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'

function varredura (array, busca, padrao){   

for (let i =0; i <= array.length; i++){

    if(array[i] === busca){
        return busca
    } else{
        return padrao;
    }
}
}
let array1 = ['maçã', 'banana', 'laranja'];
console.log(varredura(array1, 'banana', 'fruta não encontrada'));

let array2 = ['cachorro', 'gato', 'pássaro'];
console.log(varredura(array2, 'peixe', 'animal não encontrado'));