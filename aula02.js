// var -> criando uma variavel

// var altura = 5
// var comprimento = 8

// var area = altura * comprimento;
// console.log(area);

//let -> cria uma variavel (forma mais atualizada de criar um var)

let altura = 5;
let comprimento = 8;
let forma = "retangulo"
let area;

if(forma === "retangulo"){
    area = altura * comprimento
}else{
    area = (altura + comprimento) / 2
}

console.log(area)

// const -> Utilizando para criar "variaveis" que sao fixas, que não 
// const Condiçoes booleanas (Truly or Falsy)
// 0 = false
// 1 = true

const usuarioLogado = true;
const contaPaga = false;

console.log (0 == false)
console.log (contaPaga == 0)
console.log (contaPaga === 0)

