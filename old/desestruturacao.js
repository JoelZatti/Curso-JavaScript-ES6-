const usuario = {
    nome: 'Joel',
    idade: 41,
    endereco: {
        cidade: 'Marau',
        estado: 'RS',
    }
};

function mostraNome({ nome, idade, endereco: { cidade } }) {
    console.log(nome, idade, cidade);
}
mostraNome(usuario);

/* function mostraNome(usuario){
    console.log(usuario.nome);
} */

//Forma 2 - Conceito de Desestruturação
/* const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade); */

//Forma 1
/* const nome = usuario.nome;
const idade = usuario.idade;
const cidade =usuario.endereco.cidade;

console.log(nome);
console.log(idade);
console.log(cidade); */