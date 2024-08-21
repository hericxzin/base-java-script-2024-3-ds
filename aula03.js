//Alguns erros comuns 

// const numero; primeiroº erro: não declarar uma constante
const minhaVar = 'oi' // Segundoº erro:não declarar uma variavel chama no código;
console.log(minhaVar); // exemplo, chamar minhaVar com V minusculo;

console.error('Isso está errado') // 3ºv 'Erro': Voçe pode declarar um erro com o console.error;

//condicional abreviada if(){}


let idadeMinima = 18;
let idadecliente = 16;

if (idadeCliente >= idadeMinima){
    console.log('jackDanniels')
}else{
    console.log('toddy')
}

//valor ternário
console.log(idadeCliente >= idadeMinima ? "cerveja" : "toddy")
// modo ternário, utilizando a estrutura _____>=_____?_____:______
// modo ternário, utilizando a estrutura _____<=_____?_____:______
// modo ternário, utilizando a estrutura _____==_____?_____:______

const nome = "Teotonio";
const idade = 32;
const cidadeNatal = "Foz do iguaçu"

const apresentacao =  "meu nome é " + nome + ", minha idade é " + idade + " é nasci em " + cidadeNatal ; 

console.log(apresentacao)

//template string
const apresentacao2 = 'meu nome é' ${nome}, minha idade é ${idade} e minha cidade natal é ${cidadeNatal}
console.log(apresentacao2)