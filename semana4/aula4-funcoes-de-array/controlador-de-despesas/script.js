function aoClicarEmCadastrar () {
    const valorDespesa = document.getElementById("valor").value
    const tipoDespesa = document.getElementById("select-de-tipos").value
    const descricaoDespesa = document.getElementById("descricao-despesa").value
    const containerDespesas = document.getElementById('area-despesas') 
    containerDespesas.innerHTML += "<div class='nova-despesa'><p>Despesa: <p>Valor: " + valorDespesa + '</p>' + "<p> Tipo: " + tipoDespesa + "</p>" + "<p>Descrição:" + "</p>" + descricaoDespesa + "</div>"
}
