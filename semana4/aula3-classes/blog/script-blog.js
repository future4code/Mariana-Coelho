class Post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
} 



function aoClicar() {
    const tituloPost = document.getElementById("titulo").value
    const autorPost = document.getElementById("autor").value
    const conteudoPost = document.getElementById("conteudo").value
    const novoPost = new Post(tituloPost, autorPost, conteudoPost)
    console.log(novoPost)
} 


arrayDePosts = []
arrayDePosts.push(novoPost)
console.log(arrayDePosts)