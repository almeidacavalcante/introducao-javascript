
var tabela = document.querySelector("#tabela-pacientes");
var selectedTr = null;


tabela.addEventListener("click", (event) => {
    var tr = event.target.parentNode;
    var paciente = getPacienteFromTr(tr);
    
    deselectPreviousTr();
    selectTr(tr);

    preencherForm(paciente);
});

function deselectPreviousTr(){
    if (this.selectedTr != null){ 
        this.selectedTr.classList.remove("is-editing");
        this.selectedTr = null;
    }
}

function selectTr(tr){
    this.selectedTr = tr;
    tr.classList.add("is-editing");
}



function getPacienteFromTr(tr){
    
    var paciente = {
        nome: tr.querySelector(".info-nome").textContent,
        altura: tr.querySelector(".info-altura").textContent,
        massa: tr.querySelector(".info-peso").textContent,
        gordura: tr.querySelector(".info-gordura").textContent,
        imc: tr.querySelector(".info-imc").textContent
    }

    return paciente;
}

function preencherForm(paciente){
    var form = document.querySelector("#form-adiciona");

    form.querySelector("#nome").value = paciente.nome;
    form.querySelector("#altura").value = paciente.altura;
    form.querySelector("#peso").value = paciente.massa;
    form.querySelector("#gordura").value = paciente.gordura;

}