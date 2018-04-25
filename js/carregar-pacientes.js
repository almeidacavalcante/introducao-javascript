

var carregarPacientes = document.querySelector("#carregar-pacientes");

carregarPacientes.addEventListener("click", () => {
    var xhr = new XMLHttpRequest();
    var json = "";
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    var erroAjax = document.querySelector("#erro-ajax");

    xhr.addEventListener("load", () => {
        this.json = xhr.responseText;

        if (xhr.status == 200){
            loadPacientes(this.json);
            erroAjax.classList.add("hide");
        }else{
            erroAjax.classList.remove("hide");
        }

        
    })
    xhr.send();
})

function loadPacientes(json){
    var pacientes = JSON.parse(json);
    pacientes.forEach(paciente => {

        var newPaciente = {
            nome: paciente.nome,
            altura: paciente.altura,
            massa: paciente.peso,
            gordura: paciente.gordura,
            imc: paciente.imc,
        }
        
        inserirPacienteNaTabela(newPaciente);    
        
    });
}
