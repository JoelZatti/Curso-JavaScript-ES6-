//REST OPERATOR (PEGA O RESTO)
const usuario = {
    nome: 'Joel',
    idade: 41,
    empresa: 'Joe Soluções em TI'
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

function soma(a, b) {
    return a + b;
}
console.log(soma(1, 3));

function soma1(...params) {
    return params;
}
console.log(soma1(1, 3, 4));

function soma2(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma2(1, 3, 4));

function soma3(a, b, ...params) {
    return params;
}
console.log(soma3(1, 3, 4));

//SPREAD OPERATOR (REPASSA PARA OUTRA ESTRUTURA DE DADOS)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
    nome: 'Joel',
    idade: 41,
    empresa: 'Joe Soluções em TI' 
};

const usuario2 = {...usuario1, nome: 'Jú' };
console.log(usuario2);