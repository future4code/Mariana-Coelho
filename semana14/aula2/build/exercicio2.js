const postTeste = {
    autor: 'Coelho',
    texto: 'Olá, meu nome é Coelho e esse é um post.'
};
const postMarcio = {
    autor: 'Marcio',
    texto: 'Olá, eu gosto de chocolate.'
};
const postAmora = {
    autor: 'Amora e Zuko',
    texto: 'Olá, eu gosto de sachê.'
};
const postZuko = {
    autor: 'Amora e Zuko',
    texto: 'Gostamos de dormir.'
};
const postTangerina = {
    autor: 'Coelho',
    texto: 'Gosto de tangerina.'
};
const arrayDePosts = [postTeste, postAmora, postMarcio, postTangerina, postZuko];
const filtraPostPorAutor = (posts, autor) => {
    const postsFiltradosPorAutor = posts.filter((post) => {
        return post.autor === autor;
    });
    return postsFiltradosPorAutor;
};
const resultado = filtraPostPorAutor(arrayDePosts, "Coelho");
console.log(resultado);
//# sourceMappingURL=exercicio2.js.map