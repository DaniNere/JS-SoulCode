// JAVASCRIPT - Uso de Strings
// 1. Escreva um programa que inverte uma string

let palavra = "Java Script";
let invertida = "";

for(let i=palavra.length -1 ;i >= 0; i--){
    invertida += palavra[i];
    console.log(invertida);
}


// 2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"

let frase = "Eu gosto de JavaScript";
let novaFrase = frase.replace("JavaScript", "###");
console.log(novaFrase);

// 3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com

let email = "teste@email.com";
let dominio = "soulcode.com";

if (email.endsWith("soulcode.com")){
console.log("Pertence ao domínio");
}else{
    console.log("Não Pertence ao domínio");
}


