// 1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
// Maior ou igual 7 = Aprovado
// Entre 5 e 7 = Reforço
// Menor que 5 = Reprovação
let nota1 = 8;
let nota2 = 5;
let nota3 = 6;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5 && media < 7) {
    console.log("Reforço");
} else {
    console.log("Reprovação");
}




// 2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
// Indique o status com base no valor do IMC.

let peso = 75;
let altura = 170;

let imc = peso /altura*altura;

if (imc < 17){
    console.log("Muito abaixo do peso"); 
   }else if (imc>= 17 && imc < 18,49){
 console.log("Abaixo do Peso");
}  else if (imc >= 18,50 &&  imc <= 24,99) {
    console.log("Abaixo do Peso");
} else if (imc >= 25 &&  imc <= 29,99) {
    console.log("Acima do Peso");
}else if (imc >= 30 &&  imc <= 34,99) {
    console.log("Obesidade 1");
}else if (imc >= 30 &&  imc <= 34,99) {
    console.log("Obesidade 2");
}else{
    console.log("Obesidae Mórbida")
}

// 3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais!
let a = 30;
let b = 30;

if (a > b){
console.lo("A é maior que B");
}else if (b > a){
console.log("B é maior que A");
} else{
console.log("A e B São iguais");
}

// 4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.
let salario = 3000;
let quantidadeDependentes = 6;

if (quantidadeDependentes === 0) {
    console.log("Sem ajuste no salário");
} else if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    salario *= 1.3; // Aumento de 30%
    console.log("Novo salário com aumento de 30%: " + salario);
} else if (quantidadeDependentes > 5) {
    salario *= 1.4; // Aumento de 40%
    console.log("Novo salário com aumento de 40%: " + salario);
}
// 5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil.

let diaSemana = 6; // 1 a 7, sendo 1=Domingo, 2=Segunda, ..., 7=Sábado

if (diaSemana === 1 || diaSemana === 7) {
    console.log("Final de semana");
} else {
    console.log("Dia útil");
}

// 6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
// Caso 1) É um número divisível por 4, mas não é divisível por 100. 
// Caso 2) É um número divisível por 4, por 100 e por 400.
let ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(ano + " é um ano bissexto");
} else {
    console.log(ano + " não é um ano bissexto");
}
// 7. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.
let idade = 25;

if (idade < 0 || idade > 130) {
    console.log("Idade inválida");
} else {
    console.log("Idade válida: " + idade + " anos");
}

// 8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.


let turno = 'M'; // M-matutino, V-vespertino, N-noturno

switch (turno) {
    case 'M':
        console.log("Bom Dia!");
        break;
    case 'V':
        console.log("Boa Tarde!");
        break;
    case 'N':
        console.log("Boa Noite!");
        break;
    default:
        console.log("Valor Inválido!");
}