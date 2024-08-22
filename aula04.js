//FUNÇÕES!!!!

let x = "nada";
console.log(x)
x = "oi"
y = "tchau"

//Declaração de função

imprimeTexto(y)

//1) Declara a função

function imprimeTexto(testo) {
    console.log(texto)
}

// 2) chmar/ou exexutar a função

imprimeTexto(x)
imprimeTexto("eu sou aluno")

function soma(){
    return 2 + 2 
}
console.log(soma())
imprimeTexto(soma())
imprimeTexto(somadeNumeros(4, 7))
imprimeTexto(somadeNumeros (24, 11))

function somadeNumeros(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade (nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}
// a ordem dos parametros é importante

imprimeTexto(nomeIdade("teo", 32))
imprimeTexto(nomeIdade(17,"fernando"))

//voçÊ pode definir um parametro inicial para sua função

function multiplicacao(numero4 = 2, numero5 = 5){
    return numero4 * numero5
}
    imprimeTexto(multiplicacao(somadeNumeros(3,4), somadeNumeros (5,10)));
    

// espressão de Função

constconstanteSoma = function(nume1, nume2){return nume1 + nume2}

console.log(constantSoma(3,6))

// Funçoes e var são "listados" no topo do arquivo
 
// arrow function
const apresentaArrow = nome => `meu nome é ${nome}`;
const somoEmFlecha = (nu1, nu2) => nu1 + nu2;

console.log(apresentaArrow("teo"))
console.log(SomaEmFlecha(2,4))

    const somaNumerosPequenos = (num1, num2) => {
        if(num1 || num2 > 10){
            return "essa função é apenas para números pequenos"
        } else {
            return num1 + num2;
        }
    }
    console.log (somaNumerosPequenos(2,3))