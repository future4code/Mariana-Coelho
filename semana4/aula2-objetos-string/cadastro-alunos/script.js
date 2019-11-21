const inscrito = {
    nome: "",
    idade: "",
    email: ""
}

function aoClicarEmCadastrar() {
    inscrito.nome = document.getElementById("input-nome").value
    inscrito.idade = document.getElementById("input-idade").value
    inscrito.email = document.getElementById("input-email").value

    const adicionarNovoInscrito = document.getElementById("inscritos")
    adicionarNovoInscrito.innerHTML += "<div id='cadaInscrito'>" + "<p>" + inscrito.nome + "</p>" + "<p>" + inscrito.idade + "</p>" + "<p>" + inscrito.email + "</p>" + "</div>"
    //Para apagar o input
    document.getElementById('input-nome').value = ""
    document.getElementById('input-idade').value = ""
    document.getElementById('input-email').value = ""

}  