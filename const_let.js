const usuario = { nome: 'Joel' };
usuario.nome = 'Deivid';
console.log(usuario);

function teste(x) {
    let y = 2;

    if (x > 5) {
        let y = 4;
        console.log(x,  y);
    }
}
teste(10);