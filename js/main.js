


var pacientes = document.querySelectorAll(".paciente");
var botaoAdicionar = document.querySelector("#adicionar-paciente");

pacientes.forEach(paciente => {
    var tdMassa = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var massa = tdMassa.textContent;
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var alturaValida = validaAltura(altura);
    var massaValida = validaMassa(massa);

    
    if (!massaValida){
        tdImc.textContent = 'Massa inválida!';
        paciente.classList.add("paciente-invalido");
        console.log(paciente);
    }
    
    if (!alturaValida){
        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add("paciente-invalido");

    }
    
    if (alturaValida && massaValida){
        paciente.querySelector(".info-imc").textContent = calculaImc(massa, altura);
    }
});

function validaMassa(massa){
    if (massa >= 0 && massa <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function validaGordura(gordura){
    if (gordura >= 0 && gordura <= 100){
        return true;
    }else{
        return false;
    }
}

function validaNome(nome){
    if (nome.length > 0){
        return true;
    }else{
        return false;
    }
}

var form = document.querySelector("#form-adiciona");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();

    extrairPacienteDoForm(this.form);
});

function calculaImc(massa, altura){
    var imc = massa / (altura * altura)
    return imc.toFixed(2);
}

















