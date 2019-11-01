const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => [1, 2, 3];
//Retorna um Objeto - colocar parênteses antes '( )'.
const teste1 = () => ({ nome: 'Joel', idade: 41, sexo: 'M' });
console.log(teste());
console.log(teste1());