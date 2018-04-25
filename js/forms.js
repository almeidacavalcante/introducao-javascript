// Criar uma nova TR com as TDs dentro;
// Preencher as TDs com os valores do formulario;
// Limpar Formulario;

function extrairPacienteDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        massa: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    console.log(paciente);
    

    var erros = validaPaciente(paciente);
    console.log(erros);
    
    if (erros.length > 0){
        exibeMensagemErro(erros);
        return;
    }

    inserirPacienteNaTabela(paciente)

    form.reset();
}

function exibeMensagemErro(erros){

    var ul = document.querySelector("#mensagem-erro");
        
    erros.forEach(erro => {
        var li = document.createElement("li")
        li.classList.add("erro");
        li.textContent = erro;
        ul.appendChild(li);
    });
    
}

function limparMensagemErro(){
    var ul = document.querySelector("#mensagem-erro");

    ul.innerHTML = "";
}

function validaPaciente(paciente){

    var erros = [];
    limparMensagemErro();

    if(!validaNome(paciente.nome))
        erros.push("O campo nome deve ser preenchido!");
        
    if(paciente.altura.length == 0)
        erros.push("O campo altura deve ser preenchido!");
    
    if(paciente.massa == "")
        erros.push("O campo massa deve ser preenchido!");

    if(paciente.gordura.length == 0)
        erros.push("O campo gordura deve ser preenchido!");

    if (!validaAltura(paciente.altura))
        erros.push("Altura inválida!");

    if (!validaMassa(paciente.massa))
        erros.push("Massa inválida!");

    if(!validaGordura(paciente.gordura))
        erros.push("O índice de gordura deve ser maior ou igual a zero e menor ou igual a 100");


    return erros;
}

function inserirPacienteNaTabela(paciente) {
    var tabelaPacientes = document.querySelector("#tabela-pacientes");

    if (this.selectedTr == null){
        var trPaciente = montaTr(paciente);
        tabelaPacientes.appendChild(trPaciente);
    }else{
        updatePaciente(paciente);
    }
}

function updatePaciente(paciente){
    this.selectedTr.querySelector(".info-nome").textContent = paciente.nome;
    this.selectedTr.querySelector(".info-altura").textContent = paciente.altura;
    this.selectedTr.querySelector(".info-peso").textContent = paciente.massa;
    this.selectedTr.querySelector(".info-gordura").textContent = paciente.gordura;
    this.selectedTr.querySelector(".info-imc").textContent = paciente.imc;

    deselectPreviousTr();
}

function montaTd(propriedade, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = propriedade;
    return td;
}

function montaTr(paciente) {
    //Criar uma nova TR
    var trPaciente = document.createElement("tr");
    trPaciente.classList.add("paciente");

    trPaciente.appendChild(montaTd(paciente.nome, 'info-nome'));
    trPaciente.appendChild(montaTd(paciente.massa, 'info-peso'));
    trPaciente.appendChild(montaTd(paciente.altura, 'info-altura'));
    trPaciente.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    trPaciente.appendChild(montaTd(paciente.imc, 'info-imc'));

    return trPaciente;
}

