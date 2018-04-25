
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", (event) => {
    deselectPreviousTr();
    this.form.reset();
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(() => {
        event.target.parentNode.remove();   
    }, 300);

})