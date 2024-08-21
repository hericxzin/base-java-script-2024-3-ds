// var -> criando uma variavel

// var altura = 5
// var comprimento = 8

// var area = altura * comprimento;
// console.log(area);

//let -> cria uma variavel (forma mais atualizada de criar um var)

let altura = 5;
let comprimento = 8;
let forma = "morango"
let area;

if(forma === "retangulo"){
    area = altura * comprimento
}else if (forma === 'triangulo'){
    area = (altura + comprimento) / 2
} else {
    console.log ('deveria ser uma')
}
console.log(area);

// const -> Utilizando para criar "variaveis" que sao fixas, que não 
// const Condiçoes booleanas (Truly or Falsy)
// 0 = false
// 1 = true

const usuarioLogado = true;
const contaPaga = false;

console.log (0 == false); // true
console.log (contaPaga == 0); // true
console.log (contaPaga === 0); // false
console.log ('' == false); // true
console.log (1 == true); // true

// nulo e indefinido
// nulo -> vazio ou nada

let heric;
let teotonio = null;
let numero = 3;
let texto = 'eu gosto de programaçao <3'

// consultando os tipos de variaveis;

console.log(typeof heric)
console.log(typeof teotonio)
console.log(typeof numero)
console.log(typeof texto)

// conversão de variável

const numeroNumber = 390;
const numeroString = '390'

console.log(numeroNumber == numeroString) //compara apenas o valor 
console.log(numeroNumber === numeroString) // compara também o tipo 
console.log(numeroNumber + numeroString) // concatenação
console.log(numeroNumber + Number(numeroString)) // soma de numero 


